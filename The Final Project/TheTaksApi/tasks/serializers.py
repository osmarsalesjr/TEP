from rest_framework import serializers
from tasks.models import Task, Project


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('pk', 'task_name', 'description', 'date_of_creation', 'deadline')


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('pk', 'project_name', 'description', 'date_of_creation')
