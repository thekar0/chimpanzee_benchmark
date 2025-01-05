from django.db import models

# Create your models here.
class test_result(models.Model):
    user = models.CharField(max_length=150)  # Store user information
    score = models.IntegerField()     
    created_at = models.DateTimeField(auto_now_add=True)  # Timestamp of when the result was created

    def __str__(self):
        return f"User: {self.user} Score: {self.score} Created at: {self.created_at}"