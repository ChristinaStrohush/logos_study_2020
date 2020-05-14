import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  newTask = '';
  changeTask: string;
  check = false;
  result = 'in progress';
  userList: Array<string|any> = [
    {task: 'HTML5', check: this.check, result: this.result},
    {task: 'CSS3', check: this.check, result: this.result},
    {task: 'SCSS', check: this.check, result: this.result},
    {task: 'JavaScript', check: this.check, result: this.result},
    {task: 'jQuery', check: this.check, result: this.result},
    {task: 'Angular', check: this.check, result: this.result}];
  isVisible: boolean;
  index: number;
  countTask = 6;

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void{
    if (this.newTask !== ''){
      const newTask = {task: this.newTask, check: false, result: this.result};
      this.userList.push(newTask);
      this.newTask = '';
      this.countTask = this.userList.length;
    }
  }

  deleteTask(index: number): void{
    this.userList.splice(index, 1);
    this.countTask = this.userList.length;
  }

  editTask(index: number): void{
    this.changeTask = this.userList[index].task;
    this.index = index;
    this.isVisible = true;
    this.userList.map(val => val.check = false);
  }

  saveEdit(): void{
    this.userList[this.index].task = this.changeTask;
    this.changeTask = '';
    this.isVisible = false;
  }

  checkTask(i: number, event: any): void{
    this.index = i;
    this.check = event.target.checked;
    this.userList[i].check = event.target.checked;
    if (event.target.checked === true){
      this.userList[i].result = 'done';
    } else {
      this.userList[i].result = 'in progress';
    }
  }

}
