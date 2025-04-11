from django.shortcuts import render
from chimptest.models import test_result #import data from chimptest page
from verbalmemory.models import verbalmemory_result
from numbermemory.models import numbermemory_result
# Create your views here.

def render_dashboard(request):
    # Fetching the top 25 scores for chimptest and verbal memory
    chimptest_data = test_result.objects.order_by('-score')[:25]
    verbal_memory = verbalmemory_result.objects.order_by('-score')[:25]
    number_memory = numbermemory_result.objects.order_by('-score')[:25]
    
    # Passing both datasets to the template in a single dictionary
    return render(request, 'dashboard.html', {
        'chimptest_data': chimptest_data,
        'verbalmemory_data': verbal_memory,
        'numbermemory_data': number_memory
    })
