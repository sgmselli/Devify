from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.Freelance)
admin.site.register(models.Order)
admin.site.register(models.Hire)
admin.site.register(models.Tutoring)
admin.site.register(models.Clicks)