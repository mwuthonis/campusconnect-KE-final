from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import (
    EventViewSet, RegistrationViewSet, FeedbackViewSet, NotificationViewSet,
    UniversityViewSet, VenueViewSet, CategoryViewSet, RegisterView, LoginView 
)

router = DefaultRouter()
router.register(r'universities', UniversityViewSet)
router.register(r'venues', VenueViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'events', EventViewSet)
router.register(r'registrations', RegistrationViewSet)
router.register(r'feedbacks', FeedbackViewSet)
router.register(r'notifications', NotificationViewSet)

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('', include(router.urls)),
]