import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { IBlog } from '../interfaces/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/';
  }

  getUsers(): Observable<Array<IUser>> {
    return this.http.get<Array<IUser>>(`${this.url}users`);
  }

  getBlogs(): Observable<Array<IBlog>> {
    return this.http.get<Array<IBlog>>(`${this.url}blogs`, {reportProgress: true});
  }

  addUser(user: IUser): Observable<Array<IUser>> {
    return this.http.post<Array<IUser>>(`${this.url}users`, user);
  }

  addBlog(blog: IBlog): Observable<Array<IBlog>> {
    return this.http.post<Array<IBlog>>(`${this.url}blogs`, blog);
  }

  deleteBlog(blog: IBlog): Observable<Array<IBlog>> {
    return this.http.delete<Array<IBlog>>(`${this.url}blogs/${blog.id}`);
  }

  updateBlog(blog: IBlog): Observable<Array<IBlog>> {
    return this.http.put<Array<IBlog>>(`${this.url}blogs/${blog.id}`, blog);
  }

}
