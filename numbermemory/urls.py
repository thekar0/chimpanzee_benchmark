from django.urls import path, include
from . import views

urlpatterns = [
    path('numbermemory/', views.render_numbermemory),
    # path('verbalmemory/', views.save_verbalmemory_score, name='save_verbalmemory_score'),
]