from django.db import models


# Create your models here.
class Project(models.Model):
    project_name = models.CharField(max_length=50)
    description = models.CharField(max_length=120)
    date_of_creation = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.project_name


class Task(models.Model):
    task_name = models.CharField(max_length=50)
    description = models.CharField(max_length=120)
    date_of_creation = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField()

    def __str__(self):
        return self.task_name
