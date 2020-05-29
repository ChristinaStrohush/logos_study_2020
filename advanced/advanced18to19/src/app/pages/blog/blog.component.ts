import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { IBlog } from 'src/app/shared/interfaces/blog.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrBlogs: Array<IBlog> = [];

  constructor(private blogServise: BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void{
    this.blogServise.getBlogs().subscribe(data => {
      this.arrBlogs = data;
    });
  }

}
