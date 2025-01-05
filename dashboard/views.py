from django.shortcuts import render
from chimptest.models import test_result #import data from chimptest page
# Create your views here.

def render_dashboard(request):
    all_data = test_result.objects.order_by('-score')[:25]
    return render(request, 'dashboard.html', {'all_data' : all_data})