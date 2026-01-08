import { Component, OnInit } from '@angular/core';


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
  constructor() { }

  ngOnInit(): void {
  }

}
