from rest_framework import serializers
from tasks.models import Task, Project


class TaskSerializer(serializers.ModelSerializer):
    project = serializers.StringRelatedField(many=False)

    class Meta:
        model = Task
        fields = ('pk', 'task_name', 'description', 'date_of_creation', 'deadline', 'project')


class ProjectSerializer(serializers.ModelSerializer):
    tasks = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = ('pk', 'project_name', 'description', 'date_of_creation', 'tasks')
