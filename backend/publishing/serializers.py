from django.conf import settings
from rest_framework import serializers
from .models import Publication,ContactEnquiry,ManuscriptSubmission
class PublicationSerializer(serializers.ModelSerializer):
 cover_url=serializers.SerializerMethodField()
 class Meta: model=Publication; fields=["id","title","author","category","year","description","cover_url","is_featured","is_published"]
 def get_cover_url(self,obj):
  if not obj.cover:return None
  request=self.context.get("request"); return request.build_absolute_uri(obj.cover.url) if request else obj.cover.url
class ContactEnquirySerializer(serializers.ModelSerializer):
 class Meta: model=ContactEnquiry; fields=["name","email","phone","subject","message"]
class ManuscriptSubmissionSerializer(serializers.ModelSerializer):
 class Meta: model=ManuscriptSubmission; fields=["name","email","phone","institution","publication_type","title","subject","abstract","expected_pages","expected_publication_date","additional_requirements","manuscript"]
 def validate_manuscript(self,file):
  if not file:return file
  if file.size>settings.MAX_UPLOAD_SIZE: raise serializers.ValidationError("File is too large. Maximum size is 10 MB.")
  if file.content_type not in {"application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"}: raise serializers.ValidationError("Only PDF, DOC and DOCX files are accepted.")
  return file
 def validate_abstract(self,value):
  if len(value.strip())<20: raise serializers.ValidationError("Please provide a more detailed abstract or description.")
  return value.strip()
