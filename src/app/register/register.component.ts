// import { Component, OnInit } from '@angular/core';
// import { UserRegistrationComponent } from '../user-registration/user-registration.component';
// import { UserServiceService } from '../userservice.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   public register="assets/images/register.jpg";
//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
//Observable module to Observables provide support for passing messages between 
//parts of your application. They are used frequently in Angular and are 
//the recommended technique for event handling, 
//asynchronous programming, and handling multiple values.
import { Observable } from 'rxjs';
//import user.ts
import { User } from '../user';
//import user-service.service.ts
import { UserServiceService } from '../userservice.service';
//import for Form designing in Angular
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public register="assets/images/register.jpg";
  allUsers: Observable<User[]> | any;
  userForm: FormGroup | any;
  dataSaved = false;

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
    console.log(this.allUsers)
    this.userForm = new FormGroup({
      'Name': new FormControl(null),
      'Email': new FormControl(null),
      'PhoneNumber': new FormControl(null),
      'Password': new FormControl(null),
      'ConfirmPassword': new FormControl(null)
    })
  }
  loadAllUsers() {
    this.allUsers = this.userservice.getAllUsers();
  }
}

