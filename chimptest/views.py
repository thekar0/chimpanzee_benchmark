from django.shortcuts import render

# Create your views here.
def render_chimptest(request):
    return render(request, "chimptest.html")