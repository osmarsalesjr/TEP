import { Component, OnInit } from '@angular/core';
import { Task } from '../task.interface';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tasks: Task[];
  error: any;
  /*selectedTask: Task;*/

  constructor(private api: ApiService) { }
  
  ngOnInit() {
    this.api.getTasksList().subscribe(
      (tasks: Task[]) => this.tasks = tasks,
      (error: any) => this.error = error
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    location.replace('login')
  }

}
