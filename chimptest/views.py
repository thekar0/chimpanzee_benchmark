from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def render_chimptest(request):
    return render(request, "chimptest.html")