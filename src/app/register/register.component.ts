import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserServiceService } from '../userservice.service';
//import for Form designing in Angular
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public register = "assets/images/register.jpg";
  allUsers: Observable<User[]> | any;
  userForm: FormGroup | any;
  dataSaved = false;

  Name: FormControl | any;
  Email: FormControl | any;
  PhoneNumber: FormControl | any;
  Password: FormControl | any;
  ConfirmPassword: FormControl | any;

  userIdUpdate = null;
  massage = null;
  //inheriting UserServiceService from user-service.service.ts
  constructor(private userservice: UserServiceService) {

  }
  //create a function onSubmit 
  onSubmit() {
    console.log(this.userForm)
    this.dataSaved = false;
    const user = this.userForm.value;
    this.CreateUser(user);
    this.userForm.reset();
  }
  //create a function onSubmit CreateUser
  CreateUser(user: User) {
    if (this.userIdUpdate == null) {
      this.userservice.createUser(user).subscribe(
        () => {
          this.dataSaved = true;
          this.loadAllUsers();
          this.userIdUpdate = null;
          this.userForm.reset();
        }
      );
    } else {
      user.id = this.userIdUpdate;
      this.userservice.updateUser(user).subscribe(() => {
        this.loadAllUsers();
        this.userIdUpdate = null;
        this.userForm.reset();
      });
    }
  }
  ngOnInit(): void {
    this.loadAllUsers();
    this.Name = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.Email = new FormControl('', [Validators.required]);
    this.PhoneNumber = new FormControl('', [Validators.required]);
    this.Password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.ConfirmPassword = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]);
    console.log(this.allUsers)
    this.userForm = new FormGroup({
      'Name': this.Name,
      'Email': this.Email,
      'PhoneNumber': this.PhoneNumber,
      'Password': this.Password,
      'ConfirmPassword': this.ConfirmPassword,
    })
  }
  loadAllUsers() {
    this.allUsers = this.userservice.getAllUsers();
  }
}

