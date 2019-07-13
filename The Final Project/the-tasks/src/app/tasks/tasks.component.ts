import { Component, OnInit } from '@angular/core';
import { Task } from '../task.interface';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

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

  addTask(task_name: string, description: string, deadline: Date){
    this.api.createTask(task_name, description, deadline).subscribe(
      (task: Task) => this.tasks.push(task),
      (error: any) => this.error = error
    );
  }

  deleteTask(id: number){
    this.api.deleteProject(id).subscribe(
      (success: any) => this.tasks.splice(
        this.tasks.findIndex(task => task.id === id)
      ),
      (error: any) => this.error = error
    );
  }
}
