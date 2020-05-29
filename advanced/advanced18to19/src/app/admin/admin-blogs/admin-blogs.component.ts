import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BlogService } from 'src/app/shared/services/blog.service';
import { IBlog } from 'src/app/shared/interfaces/blog.interface';
import { Blog } from 'src/app/shared/models/blog.model';

@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.css']
})
export class AdminBlogsComponent implements OnInit {

  arrBlogs: Array<IBlog> = [];
  title: string;
  text: string;
  autor: string;
  image = 'https://image.freepik.com/free-photo/people-eating-pizza-restaurant_23-2148172684.jpg';
  date: string;
  isEdit = false;
  editId: number;

  constructor(
    private blogServise: BlogService,
    private datePipe: DatePipe
  ) { this.date = datePipe.transform(Date.now(), 'mediumDate'); }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void{
    this.blogServise.getBlogs().subscribe(data => {
      this.arrBlogs = data;
    });
  }

  addBlog(): void{
    console.log(this.date);
    if (this.title !== undefined && this.text !== undefined && this.autor !== undefined){
      const newBlog: IBlog = new Blog(1, this.title, this.text, this.date, this.autor, this.image);
      if (!this.isEdit){
        if (this.arrBlogs.length > 0){
          newBlog.id = this.arrBlogs.slice(-1)[0].id + 1;
        }
        this.blogServise.addBlog(newBlog).subscribe(() => this.getBlogs());
      } else {
        newBlog.id = this.editId;
        this.blogServise.updateBlog(newBlog).subscribe(() => this.getBlogs());
        this.isEdit = false;
      }
    } else {
      alert('Потрібно заповнити всі поля');
    }
    this.resetForm();
  }

  editBlog(blog: IBlog){
    this.isEdit = true;
    this.editId = blog.id;
    this.title = blog.title;
    this.text = blog.text;
    this.autor = blog.autor;
    this.date = blog.date;
    this.image = blog.image;
  }

  deleteBlog(blog: IBlog){
    this.blogServise.deleteBlog(blog).subscribe(() => this.getBlogs());
  }

  resetForm(): void{
    this.title = '';
    this.text = '';
    this.autor = '';
  }


}
