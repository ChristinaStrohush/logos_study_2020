import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBlog } from '../interfaces/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url: string;

  constructor(
    private http: HttpClient
  ) { this.url = 'http://localhost:3000/blogs'; }

  getBlogs(): Observable<Array<IBlog>>{
    return this.http.get<Array<IBlog>>(this.url);
  }

  addBlog(blog: IBlog): Observable<Array<IBlog>>{
    return this.http.post<Array<IBlog>>(this.url, blog);
  }

  deleteBlog(blog: IBlog): Observable<Array<IBlog>>{
    return this.http.delete<Array<IBlog>>(`${this.url}/${blog.id}`);
  }

  updateBlog(blog: IBlog): Observable<Array<IBlog>>{
    return this.http.put<Array<IBlog>>(`${this.url}/${blog.id}`, blog);
  }

}
