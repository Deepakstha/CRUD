from django.urls import path
from . import views

urlpatterns = [
    path('articles/', views.article_list, name="article_list"),
    path('articles/<int:pk>', views.article_details, name="article_details"),
    path('register/', views.RegisterUser.as_view()),
]
