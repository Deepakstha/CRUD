from django.contrib import admin
from . import models

# admin.site.register(models.Article)


@admin.register(models.Article)
class ArticleModel(admin.ModelAdmin):
    list_filter = ('title', 'description')
    list_display = ('title', 'description')
