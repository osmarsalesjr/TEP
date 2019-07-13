import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Project } from '../project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  error: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProjectsList().subscribe(
      (projects: Project[]) => this.projects = projects,
      (error: any) => this.error = error
    );
  }

  addProject(project_name: string, description: string){
    this.api.createProject(project_name, description).subscribe(
      (project: Project) => this.projects.push(project),
      (error: any) => this.error = error
    );
  }

  deleteProject(id: number){
    this.api.deleteProject(id).subscribe(
      (success: any) => this.projects.splice(
        this.projects.findIndex(project => project.id === id)
      ),
      (error: any) => this.error = error
    );

    location.replace('projects-list');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    location.replace('login')
  }

}
