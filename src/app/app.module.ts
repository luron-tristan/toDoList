import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentTasksComponent } from './components/current-tasks/current-tasks.component';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';
import { TasksStorageService } from './tasks-storage.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CurrentTasksComponent,
    CompletedTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TasksStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
