from django.shortcuts import render

from rest_framework import generics
from rest_framework import viewsets
from tasks.models import Project, Task
from tasks.serializers import TaskSerializer, ProjectSerializer


# Create your views here.
class ProjectsList(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    name = 'projects-list'


# class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Project.objects.all()
#     serializer_class = ProjectSerializer
#     name = 'project-detail'


class TasksList(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    name = 'tasks-list'

# class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
#    queryset = Task.objects.all()
#    serializer_class = TaskSerializer
#    name = 'tasks-detail'
