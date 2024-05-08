import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Modal/user';

@Component({
  selector: 'app-navbar-back',
  templateUrl: './navbar-back.component.html',
  styleUrls: ['./navbar-back.component.css']
})
export class NavbarBackComponent implements OnInit{
  user: User | undefined ;



  constructor(private router :Router ){}
  ngOnInit(): void {

  }
  id=localStorage.getItem('angular17TokenUserId')
   name = localStorage.getItem('name');
   image = localStorage.getItem('image');
logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('angular17TokenUserId');
  localStorage.removeItem('angular17TokenEmail');
  localStorage.removeItem('name');
  localStorage.removeItem('image');

  // Redirect to login page
  this.router.navigate(['']);
}

}
