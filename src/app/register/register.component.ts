import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm:FormGroup;

  constructor(private fb:FormBuilder, private userService:UserService,private router:Router){
    this.registerForm=this.fb.group({
      username:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',Validators.required]
    });
  }

  onSubmit(){
    if(this.registerForm.valid){
      const {username,email,password}=this.registerForm.value;


      this.userService.register({username,email,password}).subscribe({
        next:(response)=>{
          console.log("registration successfuly")
          localStorage.setItem('token',response.token)
          this.router.navigate(['/profile'])
        },
        error:(error)=>{
          console.error("registration failed: ",error)
        }
      })
    }
  }
}
