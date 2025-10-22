from rest_framework import permissions

class IsAdminOrReadOnly(permissions.BasePermission):
    """
    Allow full access to admins, read-only for others.
    """
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_authenticated and getattr(request.user, 'role', None) == 'admin'

class IsOrganizerOrAdmin(permissions.BasePermission):
    """
    Allow organizers or admins to edit, others denied.
    """
    def has_object_permission(self, request, view, obj):
        return (
            request.user.is_authenticated and
            getattr(request.user, 'role', None) in ('organizer', 'admin')
        )