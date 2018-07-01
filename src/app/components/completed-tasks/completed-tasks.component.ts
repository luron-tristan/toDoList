import { Component, OnInit } from '@angular/core';
import { TasksStorageService } from '../../tasks-storage.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {
  completedTaskList = [];

  constructor(private storage: TasksStorageService) { 
    this.completedTaskList = this.storage.renderCompleteTasksList();
  }

  ngOnInit() {
  }

  togglePriority(task: Task, i: number) {
    task.isPriority = !task.isPriority;
    this.storage.reorderArray('completeTasksList', task, i);
    this.storage.updateLs();
  }

  toggleCompleted(task: Task) {
    task.isCompleted = !task.isCompleted;
  }

  backToCurrent(task: Task, index: number) {
    task.isCompleted = !task.isCompleted;
    this.storage.setTaskToCurrent(index);
  }

  deleteTask(list, index) {
    this.storage.deleteTask(list, index);
  }
}
