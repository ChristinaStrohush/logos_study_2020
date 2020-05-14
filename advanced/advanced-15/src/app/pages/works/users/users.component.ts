import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  reLogPass = /^\w+$/;
  reEmail = /^[\w-\.]+\@[a-zA-Z]+\.[a-zA-Z]+$/;
  users = [];
  newUser = {};
  loginInp: string;
  passwordInp: string;
  emailInp: string;
  index: number;
  isVisible: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  addUser(): void{
    if (this.reLogPass.test(this.loginInp) && this.reLogPass.test(this.passwordInp) && this.reEmail.test(this.emailInp)){
      this.newUser = {
      login: this.loginInp,
      password: this.passwordInp,
      email: this.emailInp
      };
      this.users.push(this.newUser);
      this.resetForm();
    }
  }

  resetForm(): void{
    this.loginInp = '';
    this.passwordInp = '';
    this.emailInp = '';
  }

  editUser(i: number): void{
    this.loginInp = this.users[i].login;
    this.passwordInp = this.users[i].password;
    this.emailInp = this.users[i].email;
    this.isVisible = true;
    this.index = i;
  }

  saveEdit(): void{
    this.users[this.index].login = this.loginInp;
    this.users[this.index].password = this.passwordInp;
    this.users[this.index].email = this.emailInp;
    this.isVisible = false;
    this.resetForm();
  }

  deleteUser(i: number): void{
    this.users.splice(i, 1);
  }

}
