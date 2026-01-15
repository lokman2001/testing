import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public dropbox : boolean = false
  public dropboxClick (){
    this.dropbox = !this.dropbox
    console.log(this.dropbox)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
