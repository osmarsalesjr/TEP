from django.shortcuts import render

from rest_framework import generics
from rest_framework import viewsets
from tasks.models import Project, Task
from tasks.serializers import TaskSerializer, ProjectSerializer


# Create your views here.
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
