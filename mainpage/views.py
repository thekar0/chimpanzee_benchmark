from django.shortcuts import render
# Create your views here.
def render_mainpage(request):
    return render(request, "mainpage.html")