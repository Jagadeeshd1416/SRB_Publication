from django.conf import settings
from django.core.mail import send_mail,EmailMessage
def configured(): return bool(settings.EMAIL_HOST_USER and settings.EMAIL_HOST_PASSWORD and settings.COMPANY_NOTIFICATION_EMAIL)
def contact_notice(x):
 if not configured(): return False
 body=f"New Contact Enquiry — SRB Publication\n\nName: {x.name}\nEmail: {x.email}\nPhone: {x.phone or 'Not provided'}\nSubject: {x.subject}\n\nMessage:\n{x.message}\n\nSubmitted: {x.created_at:%d %B %Y, %I:%M %p}"
 send_mail(f"New Contact Enquiry — {x.subject}",body,settings.DEFAULT_FROM_EMAIL,[settings.COMPANY_NOTIFICATION_EMAIL],fail_silently=False); return True
def submission_notice(x):
 if not configured(): return False
 body=f"New Manuscript Submission — {x.publication_id}\n\nAuthor: {x.name}\nEmail: {x.email}\nPhone: {x.phone}\nInstitution: {x.institution or 'Not provided'}\n\nPublication Type: {x.publication_type}\nTitle: {x.title}\nSubject: {x.subject or 'Not provided'}\nExpected Pages: {x.expected_pages or 'Not provided'}\nExpected Publication Date: {x.expected_publication_date or 'Not provided'}\n\nAbstract / Description:\n{x.abstract}\n\nAdditional Requirements:\n{x.additional_requirements or 'None'}"
 email=EmailMessage(f"New Manuscript Submission — {x.publication_id}",body,settings.DEFAULT_FROM_EMAIL,[settings.COMPANY_NOTIFICATION_EMAIL])
 if x.manuscript: email.attach_file(x.manuscript.path)
 email.send(fail_silently=False); return True
def author_notice(x):
 if not configured(): return False
 body=f"Dear {x.name},\n\nThank you for submitting your work to SRB Publication.\n\nSubmission ID: {x.publication_id}\nTitle: {x.title}\nPublication Type: {x.publication_type}\nStatus: Submitted\n\nOur team will review the information and contact you regarding the next steps.\n\nSRB Publication\nTextbook & Patent Publications\nVijayawada, India\nPhone: 79891 62608\nEmail: srbpublication@gmail.com"
 send_mail(f"Submission Received — {x.publication_id}",body,settings.DEFAULT_FROM_EMAIL,[x.email],fail_silently=False); return True
