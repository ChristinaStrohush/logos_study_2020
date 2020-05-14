import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { CenzorComponent } from './pages/works/cenzor/cenzor.component';
import { UsersComponent } from './pages/works/users/users.component';
import { TasksComponent } from './pages/works/tasks/tasks.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'works', component: WorksComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'cenzor' },
    { path: 'cenzor', component: CenzorComponent },
    { path: 'users', component: UsersComponent },
    { path: 'tasks', component: TasksComponent },
  ] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
