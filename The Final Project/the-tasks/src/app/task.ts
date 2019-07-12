import { Project } from './project';

export class Task{
    id: number;
    task_name: string;
    description: string;
    date_of_creation: Date;
    deadline: Date;
    project: Project;
}