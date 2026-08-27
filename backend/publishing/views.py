from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser,FormParser,MultiPartParser
from .models import Publication,ContactEnquiry,ManuscriptSubmission
from .serializers import PublicationSerializer,ContactEnquirySerializer,ManuscriptSubmissionSerializer
from .services import contact_notice,submission_notice,author_notice
class HealthView(APIView):
 def get(self,request): return Response({"status":"ok","service":"SRB Publication API"})
class PublicationListView(APIView):
 def get(self,request):
  qs=Publication.objects.filter(is_published=True)
  if request.query_params.get("category"): qs=qs.filter(category__iexact=request.query_params["category"])
  if request.query_params.get("featured")=="true": qs=qs.filter(is_featured=True)
  return Response(PublicationSerializer(qs,many=True,context={"request":request}).data)
class ContactCreateView(APIView):
 parser_classes=[JSONParser,FormParser,MultiPartParser]
 def post(self,request):
  s=ContactEnquirySerializer(data=request.data)
  if not s.is_valid(): return Response({"success":False,"errors":s.errors},status=400)
  obj=s.save(); sent=False
  try: sent=contact_notice(obj)
  except Exception: pass
  return Response({"success":True,"message":"Your enquiry has been received successfully.","email_notification_sent":sent,"id":obj.id},status=201)
class ManuscriptCreateView(APIView):
 parser_classes=[MultiPartParser,FormParser]
 def post(self,request):
  s=ManuscriptSubmissionSerializer(data=request.data)
  if not s.is_valid(): return Response({"success":False,"errors":s.errors},status=400)
  obj=s.save(); company=False; author=False
  try: company=submission_notice(obj)
  except Exception: pass
  try: author=author_notice(obj)
  except Exception: pass
  return Response({"success":True,"message":"Your manuscript enquiry has been submitted successfully.","submission_id":obj.publication_id,"status":obj.status,"company_email_notification_sent":company,"author_confirmation_sent":author},status=201)
