from django.db import models
from django.utils import timezone
import uuid
class Publication(models.Model):
 title=models.CharField(max_length=255); author=models.CharField(max_length=255,blank=True); category=models.CharField(max_length=120); year=models.PositiveIntegerField(default=2026); description=models.TextField(blank=True); cover=models.ImageField(upload_to="publication_covers/",blank=True,null=True); is_featured=models.BooleanField(default=False); is_published=models.BooleanField(default=True); created_at=models.DateTimeField(auto_now_add=True)
 class Meta: ordering=["-created_at"]
 def __str__(self): return self.title
class ContactEnquiry(models.Model):
 name=models.CharField(max_length=150); email=models.EmailField(); phone=models.CharField(max_length=30,blank=True); subject=models.CharField(max_length=255); message=models.TextField(); is_read=models.BooleanField(default=False); created_at=models.DateTimeField(auto_now_add=True)
 class Meta: ordering=["-created_at"]
 def __str__(self): return f"{self.name} — {self.subject}"
class ManuscriptSubmission(models.Model):
 STATUS_CHOICES=[("submitted","Submitted"),("under_review","Under Review"),("revision_required","Revision Required"),("accepted","Accepted"),("editing","Editing"),("formatting","Formatting"),("published","Published"),("rejected","Rejected")]
 publication_id=models.CharField(max_length=40,unique=True,editable=False,db_index=True); name=models.CharField(max_length=150); email=models.EmailField(); phone=models.CharField(max_length=30); institution=models.CharField(max_length=255,blank=True); publication_type=models.CharField(max_length=120); title=models.CharField(max_length=255); subject=models.CharField(max_length=150,blank=True); abstract=models.TextField(); expected_pages=models.PositiveIntegerField(blank=True,null=True); expected_publication_date=models.DateField(blank=True,null=True); additional_requirements=models.TextField(blank=True); manuscript=models.FileField(upload_to="manuscripts/%Y/%m/",blank=True,null=True); status=models.CharField(max_length=30,choices=STATUS_CHOICES,default="submitted"); created_at=models.DateTimeField(auto_now_add=True); updated_at=models.DateTimeField(auto_now=True)
 class Meta: ordering=["-created_at"]
 def save(self,*args,**kwargs):
  if not self.publication_id: self.publication_id=f"SRB-{timezone.localdate().strftime('%Y%m%d')}-{uuid.uuid4().hex[:6].upper()}"
  super().save(*args,**kwargs)
 def __str__(self): return f"{self.publication_id} — {self.title}"
