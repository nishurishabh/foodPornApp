import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user.model';
import { Data, Router } from '@angular/router';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { }
  tmpUser: User

  ngOnInit() {
  }

  signupFormUser = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })

  onSubmit() {
    this.tmpUser = new User(
      this.signupFormUser.value['username'],
      this.signupFormUser.value['password'],
      this.signupFormUser.value['firstName'],
      this.signupFormUser.value['lastName']
    )

    this.userService.addUser(this.tmpUser).subscribe(
      (data) => {
        
        this.router.navigate(['/dashboard']);
      }
    )

  }

}
