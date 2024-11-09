import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { AuthGuard } from './guards/auth.guard';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
    { path: 'projects', component: ProjectListComponent, canActivate:[AuthGuard] },
    { path: 'projects/:id', component: ProjectDetailsComponent },
    { path: 'tasks/:id', component: TaskDetailsComponent },
    { path: 'create-task', component: TaskFormComponent },
    { path: 'edit-task/:id', component: TaskFormComponent }
  ];