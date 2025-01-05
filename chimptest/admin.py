from django.contrib import admin

# Register your models here.
from .models import test_result

# Register the test_result model
admin.site.register(test_result)