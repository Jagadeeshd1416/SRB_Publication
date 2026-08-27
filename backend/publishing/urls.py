from django.urls import path
from .views import HealthView,PublicationListView,ContactCreateView,ManuscriptCreateView
urlpatterns=[path("health/",HealthView.as_view()),path("publications/",PublicationListView.as_view()),path("contact/",ContactCreateView.as_view()),path("submissions/",ManuscriptCreateView.as_view())]
