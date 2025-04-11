from django.shortcuts import render

# Create your views here.
def render_numbermemory(request):
    return render(request, 'numbermemory.html')