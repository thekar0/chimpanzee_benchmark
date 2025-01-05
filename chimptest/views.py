from django.shortcuts import render, redirect
from .models import test_result
from django.http import HttpResponse
from .models import test_result
from django.db import models

def finish_quiz_view(request):
    if request.method == 'POST':
        user = request.POST.get('user')  # Get user information from the form
        score = request.POST.get('score')  # Get the score from the form
        # Create a new QuizResult instance and save it to the database

        request.session['quiz_user'] = user
        request.session['quiz_score'] = score

        message = f"Good job, {user}! You got {score} points!"

        result = test_result(user=user, score=score)
        result.save()

        return redirect('../')  # Redirect to a success page or results page

    return render(request, 'chimptest.html', {'message': message})  # Render the 

# Create your views here.
# def render_chimptest(request):
#     return render(request, "chimptest.html")

def render_chimptest(request):
    avg_score = round(test_result.objects.aggregate(models.Avg('score'))['score__avg'], 2)

    return render(request, 'chimptest.html', {'avg_score':avg_score})