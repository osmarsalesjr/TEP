from rest_framework import serializers
from tasks.models import Task, Project


class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Task
        fields = ('task_name', 'description', 'date_of_creation', 'deadline', 'project')


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    tasks = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = ('project_name', 'description', 'date_of_creation', 'tasks')
