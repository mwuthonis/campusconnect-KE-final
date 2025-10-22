from django.conf import settings
from django.db import connection

def search_events(queryset, query):
    engine = connection.vendor
    if engine == 'postgresql':
        from django.contrib.postgres.search import SearchVector
        return queryset.annotate(
            search=SearchVector('title', 'description')
        ).filter(search=query)
    else:
        # Fallback for SQLite and others
        return queryset.filter(
            models.Q(title__icontains=query) | models.Q(description__icontains=query)
        )