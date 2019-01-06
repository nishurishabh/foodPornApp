
import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, Data } from '@angular/router';
import { database } from 'firebase';
import { UserService } from '../user.service';
import { User } from '../user.model';



@Component({
  selector: 'app-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})

export class LoginUserComponent {

  constructor(private userService: UserService,
              private router: Router) { }

  userFormLogin = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  onAuthenticate() {
    const username = this.userFormLogin.value['username'];
    const password = this.userFormLogin.value['password'];

    this.userService.authenticateUser(username, password).subscribe(
      (data: Data) => {
         this.router.navigate(['/dashboard']);
      },
     
      
    );
  }
}
