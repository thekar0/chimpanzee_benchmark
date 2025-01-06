from django.shortcuts import render, redirect
from .models import test_result
from django.http import HttpResponse
from .models import test_result
from django.db import models

def finish_quiz_view(request):
    if request.method == 'POST':
        user = request.POST.get('user')  # Get user information from the form
        score = request.POST.get('score')  # Get the score from the form

        try:
            score = int(score)  # Convert score to an integer
        except ValueError:
            message = "Invalid score. Please enter a valid integer."
            return render(request, 'chimptest.html', {'message': message})

        if score < 1 or score > 24:
            message = "Invalid score. Please enter a score between 1 and 24."
            return render(request, 'chimptest.html', {'message': message})

        message = f"Good job, {user}! You got {score} points!"

        request.session['quiz_user'] = user
        request.session['quiz_score'] = score

        result = test_result(user=user, score=score)
        result.save()

        return redirect('../')  # Redirect to a success page or results page

    return render(request, 'chimptest.html')  # Render the template without a message


def render_chimptest(request):
    if test_result.objects.exists():
        # Calculate the average score
        avg_score = round(test_result.objects.aggregate(models.Avg('score'))['score__avg'], 2)
        return render(request, 'chimptest.html', {'avg_score': avg_score})
    else:
        # If the database is empty, return a message indicating that
        return render(request, 'chimptest.html', {'avg_score': '0'})