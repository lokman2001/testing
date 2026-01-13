import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public lock : boolean = true
  public type : string = "password"
  public isLock (){
    this.lock = !this.lock
    return this.type = this.lock ? "password" : "text"
  }
  
  constructor(public route:Router) { }
public toDashboard(){
    this.route.navigate(['dashboard'])
  }
  ngOnInit(): void {
  }

}
