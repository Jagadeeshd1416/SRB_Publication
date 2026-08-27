from django.contrib import admin
from .models import Publication,ContactEnquiry,ManuscriptSubmission
@admin.register(Publication)
class PublicationAdmin(admin.ModelAdmin):
 list_display=("title","author","category","year","is_featured","is_published","created_at"); list_filter=("category","year","is_featured","is_published"); search_fields=("title","author","category"); list_editable=("is_featured","is_published")
@admin.register(ContactEnquiry)
class ContactEnquiryAdmin(admin.ModelAdmin):
 list_display=("name","email","subject","is_read","created_at"); list_filter=("is_read","created_at"); search_fields=("name","email","subject","message"); list_editable=("is_read",)
@admin.register(ManuscriptSubmission)
class ManuscriptSubmissionAdmin(admin.ModelAdmin):
 list_display=("publication_id","name","title","publication_type","status","created_at"); list_filter=("status","publication_type","created_at"); search_fields=("publication_id","name","email","title","subject"); readonly_fields=("publication_id","created_at","updated_at"); list_editable=("status",)
