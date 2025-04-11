from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import verbalmemory_result
from django.db import models

def save_verbalmemory_score(request):
    if request.method == 'POST':
        user = request.POST.get('user')  # Get user information from the form
        score = request.POST.get('score')  # Get the score from the form

        try:
            score = int(score)  # Convert score to an integer
        except ValueError:
            message = "Invalid score. Please enter a valid integer."
            return render(request, 'verbalmemory.html', {'message': message})

        if score < 1 or score > 24:
            message = "Invalid score. Please enter a score between 1 and 24."
            return render(request, 'verbalmemory.html', {'message': message})

        message = f"Good job, {user}! You got {score} points!"

        request.session['quiz_user'] = user
        request.session['quiz_score'] = score

        result = verbalmemory_result(user=user, score=score)
        result.save()

        return redirect('.')  # Redirect to a success page or results page

    return render(request, 'verbalmemory.html')  # Render the template without a message


def render_verbalmemory(request):
    return render(request, 'verbalmemory.html')