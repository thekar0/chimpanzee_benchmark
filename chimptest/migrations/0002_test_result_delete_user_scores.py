# Generated by Django 5.1.4 on 2025-01-04 20:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chimptest', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='test_result',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(max_length=150)),
                ('score', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.DeleteModel(
            name='user_scores',
        ),
    ]
