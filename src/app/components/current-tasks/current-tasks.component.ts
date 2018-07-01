import { Component, OnInit, ViewChild } from '@angular/core';
import { TasksStorageService } from '../../tasks-storage.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'current-tasks',
  templateUrl: './current-tasks.component.html',
  styleUrls: ['./current-tasks.component.css']
})
export class CurrentTasksComponent implements OnInit {
  taskList;
  @ViewChild ('title') title;

  constructor(private storage: TasksStorageService) { 
    this.taskList = this.storage.renderTaskList();
  }

  ngOnInit() {
  }

  addToTaskList(task) {
    if (task.value.title != '' && task.value.title != null) {
      this.storage.addNewTask(task.value);
      task.reset();
    }
  }

  togglePriority(task: Task, i: number) {
    task.isPriority = !task.isPriority;
    this.storage.reorderArray('taskList', task, i);
    this.storage.updateLs();
  }

  complete(task: Task, index: number) {
    task.isCompleted = !task.isCompleted;
    this.storage.setTaskToComplete(index);
  }

  deleteTask(list, index) {
    this.storage.deleteTask(list, index);
  }
}
