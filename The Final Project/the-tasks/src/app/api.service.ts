import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ApiService {

  private apiRoot = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  getProjectsList(){
    return this.http.get(this.apiRoot.concat('projects/'));
  }

  createProject(project_name: string, description: string){
    return this.http.post(this.apiRoot.concat('projects/'), {project_name, description});
  }

  deleteProject(id: number){
    return this.http.delete(this.apiRoot.concat(`projects/${id}/`));
  }

  getTasksList(){
    return this.http.get(this.apiRoot.concat('tasks/'));
  }

  createTask(task_name: string, description: string, deadline: Date){
    return this.http.post(this.apiRoot.concat('tasks/'), {task_name, description, deadline});
  }

  deleteTask(id: number){
    return this.http.delete(this.apiRoot.concat(`tasks/${id}/`));
  }
}
