from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import (
    User, University, Category, Venue, Event, Registration, Feedback, Notification
)

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'role', 'university', 'department', 'is_staff')
    search_fields = ('username', 'email', 'first_name', 'last_name', 'department')
    list_filter = ('role', 'university', 'is_staff', 'is_superuser')

@admin.register(University)
class UniversityAdmin(admin.ModelAdmin):
    list_display = ('name', 'location')
    search_fields = ('name', 'location')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)

@admin.register(Venue)
class VenueAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'capacity')
    search_fields = ('name', 'address')

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'organizer', 'category', 'event_type', 'venue', 'start_time', 'end_time', 'capacity', 'university', 'date', 'status')
    search_fields = ('title', 'description', 'organizer__username', 'venue__name')
    list_filter = ('event_type', 'status', 'university', 'category')

@admin.register(Registration)
class RegistrationAdmin(admin.ModelAdmin):
    list_display = ('user', 'event', 'registered_at', 'attended')
    search_fields = ('user__username', 'event__title')

@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('user', 'event', 'rating', 'submitted_at')
    search_fields = ('user__username', 'event__title', 'comment')

@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ('user', 'message', 'created_at', 'is_read')
    search_fields = ('user__username', 'message')
