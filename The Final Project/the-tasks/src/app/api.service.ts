import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project';

@Injectable()

export class ApiService {

  private apiRoot = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  getProjectsList(){
    return this.http.get(this.apiRoot.concat('projects-list/'));
  }

  createProject(project_name: string, description: string){
    return this.http.post(this.apiRoot.concat('projects-list/'), {project_name, description});
  }

  deleteProject(id: number){
    return this.http.delete(this.apiRoot.concat(`projects-list/${id}/`));
  }

  getTasksList(){
    return this.http.get(this.apiRoot.concat('tasks-list/'));
  }

  createTask(task_name: string, description: string, deadline: Date){
    return this.http.post(this.apiRoot.concat('tasks-list/'), {task_name, description, deadline});
  }

  deleteTask(id: number){
    return this.http.delete(this.apiRoot.concat(`tasks-list/${id}/`));
  }

  getProfilesList(){
    return this.http.get(this.apiRoot.concat('profiles-list/'));
  }

  deleteProfile(id: number){
    return this.http.delete(this.apiRoot.concat(`profiles-list/${id}/`));
  }
}
