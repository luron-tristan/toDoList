import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksStorageService {
  taskList: Array<Task> = [
    {title: 'Get up, Stand up', isPriority: false, isCompleted: false},
    {title: 'Stand up for your rights', isPriority: false, isCompleted: false}
  ];

  completeTasksList: Array<Task> = [
    {title: 'Don\'t give up the fight', isPriority: false, isCompleted: true}
  ];

  constructor() {
    console.log(localStorage);
    if (localStorage.length !== 0) {
      this.taskList = JSON.parse(localStorage.getItem('taskList'));
      this.completeTasksList = JSON.parse(localStorage.getItem('completeTasksList'));
    }
  }

  addNewTask(task: Task) {
    task.isCompleted = false;
    task.isPriority = false;
    this.taskList.push(task);
    this.updateLs();
  }

  renderTaskList() {
    return this.taskList;
  }

  renderCompleteTasksList() {
    return this.completeTasksList;
  }

  setTaskToComplete(index: number) {
    this.completeTasksList.push(this.taskList[index]);
    this.taskList.splice(index, 1);
    this.updateLs();
  }

  setTaskToCurrent(index: number) {
    this.taskList.push(this.completeTasksList[index]);
    this.completeTasksList.splice(index, 1);
    this.updateLs();
  }

  reorderArray(array: string, task: Task, i: number) {
    if (array == 'taskList' && task.isPriority) {
      let newPriority = (this.taskList.splice(i, 1));
      this.taskList.unshift(newPriority[0]);
    } 
    else if (array == 'completeTasksList' && task.isPriority) {
      let newPriority = (this.completeTasksList.splice(i, 1));
      this.completeTasksList.unshift(newPriority[0]);
    }
  }

  deleteTask(list, index){
    if (list === 'taskList') {
      this.taskList.splice(index, 1);
    }
    else if (list === 'completeTasksList') {
      this.completeTasksList.splice(index, 1);
    }
    this.updateLs();
  }

  updateLs() {
    localStorage.setItem('completeTasksList', JSON.stringify(this.completeTasksList));
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
    this.renderTaskList();
    this.renderCompleteTasksList();
  }
}
