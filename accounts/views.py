from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout

def signup_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('../mainpage/')
    else:
        form = UserCreationForm()
    return render(request, "signup.html", {'form':form})

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data = request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('../mainpage/')
    else:
        form = AuthenticationForm()
    return render(request, "mainpage.html", {'form':form})

def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return redirect('../mainpage/')