import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UsersService } from 'src/app/shared/servises/users.service';
import { DatePipe } from '@angular/common';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { IBlog } from 'src/app/shared/interfaces/blog.interface';
import { User } from 'src/app/shared/models/user.model';
import { Blog } from 'src/app/shared/models/blog.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  arrUsers: Array<IUser> = [];
  arrBlogs: Array<IBlog> = [];

  userName: string;
  userEmail: string;
  userPassword: string;

  title: string;
  text: string;

  user: string;
  signAct: string;
  isUserName = false;
  isUser = false;

  isVisible = false;
  isEdit = false;
  isAdminPanel = false;
  editId: number;

  date: string;
  formatDate = 'HH:mm, dd.MM.yyyy';

  modalRef: BsModalRef;
  modalRefPost: BsModalRef;

  constructor(
    private usersService: UsersService,
    private modalService: BsModalService,
    private datePipe: DatePipe
    ) {
      this.date = datePipe.transform(Date.now(), this.formatDate);
    }

  ngOnInit(): void {
    this.getBlogs();
    this.getUsers();
  }

  private getBlogs(): void{
    this.usersService.getBlogs().subscribe(data => {
      this.arrBlogs = data;
    });
  }

  private getUsers(): void{
    this.usersService.getUsers().subscribe(data => {
      this.arrUsers = data;
    });
  }

  private updateBlog(blog: IBlog): void{
    this.usersService.updateBlog(blog).subscribe(() => this.getBlogs());
  }

  updateDB(){
    this.arrBlogs.forEach(blog => {
      blog.isAdmin = false;
      this.updateBlog(blog);
    });
    this.isAdminPanel = true;
  }

  openModal(template: TemplateRef<any>, ev) {
    if (ev.target.innerText !== 'Sing In'){
      this.isUserName = true;
    } else {
      this.isUserName = false;
    }
    this.signAct = ev.target.innerText;
    this.modalRef = this.modalService.show(template);
  }

  openModalPost(template: TemplateRef<any>) {
    this.modalRefPost = this.modalService.show(template);
  }

  registration(): void{
    this.resetForm();
    if (this.signAct !== 'Sing In'){
      this.singUp();
    } else {
      this.singIn();
    }
    this.getUsers();
    this.modalRef.hide();
  }

  singIn(): void{
    if (this.arrUsers.some(user => user.email === this.userEmail && user.password === this.userPassword)){
      const userAccount = this.arrUsers.filter(user => user.email === this.userEmail && user.password === this.userPassword);
      this.user = userAccount[0].username;
      this.isUser = true;
      this.isVisible = true;
      this.adminPanel();
    } else {
      alert('Такий користувач не зареєстрований або невірно вказані дані для входу');
    }
  }

  singUp(): void{
    if (this.userName !== undefined && this.userEmail !== undefined && this.userPassword !== undefined){
      if (this.arrUsers.some(user => user.username !== this.userName && user.email !== this.userEmail)){
        const newUser: IUser = new User(1, this.userName, this.userEmail, this.userPassword);
        this.user = newUser.username;
        this.isUser = true;
        this.isVisible = true;
        if (this.arrUsers.length > 0){
          newUser.id = this.arrUsers.slice(-1)[0].id + 1;
        }
        this.usersService.addUser(newUser).subscribe(() => {
          this.getUsers();
        });
        this.adminPanel();
      } else {
        alert('Користувач з таким іменем чи мейлом існує. Пройдіть реєстрацію через "Sing In"');
      }
    } else {
      alert('Всі поля мають бути заповнені');
    }
  }

  adminPanel(){
    if (this.isUser){
      if (this.user === 'admin'){
        this.arrBlogs.forEach(blog => {
          blog.isAdmin = true;
          this.updateBlog(blog);
        });
      } else {
        const adminBlog = this.arrBlogs.filter(blog => blog.postedBy === this.user).forEach(blog => {
          blog.isAdmin = true;
          this.updateBlog(blog);
        });
      }
    } else {
      this.arrBlogs.forEach(blog => {
        blog.isAdmin = false;
        this.updateBlog(blog);
      });
    }
  }

  addBlog(): void{
    const newPost: IBlog = new Blog(1, this.user, this.title, this.date, this.text, true);
    if (!this.isEdit){
      if (this.arrBlogs.length > 0){
        newPost.id = this.arrBlogs.slice(-1)[0].id + 1;
      }
      this.usersService.addBlog(newPost).subscribe(() => {
        this.getBlogs();
      });
    } else {
      newPost.id = this.editId;
      if (this.user !== this.userName){
        newPost.postedBy = this.userName;
      }
      this.updateBlog(newPost);
      this.isEdit = false;
    }
    this.modalRefPost.hide();
    this.resetPostForm();
  }

  editBlog(blog: IBlog, template: TemplateRef<any>): void{
    this.isEdit = true;
    this.editId = blog.id;
    this.title = blog.topic;
    this.text = blog.message;
    this.date = blog.date;
    this.userName = blog.postedBy;
    this.openModalPost(template);
  }

  deleteBlog(blog: IBlog): void{
    this.usersService.deleteBlog(blog).subscribe(() => {
      this.getBlogs();
    });
    this.isUser = true;
  }

  singOut(){
    this.user = '';
    this.isUser = false;
    this.isVisible = false;
    this.adminPanel();
  }

  resetForm(): void{
    this.userName = '';
    this.userEmail = '';
    this.userPassword = '';
  }

  resetPostForm(): void{
    this.title = '';
    this.text = '';
    this.date = this.datePipe.transform(Date.now(), this.formatDate);
  }

}
