import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService : UserService) { }
  
  ngOnInit() {
  }
  fn = this.userService.fn
  ln = this.userService.ln 

  isloggedIn() {
    return this.userService.logged
  }

  logout() {
    this.userService.Logout();
  }
 }

 
