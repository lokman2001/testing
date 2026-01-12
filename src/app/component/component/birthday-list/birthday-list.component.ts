import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday-list',
  templateUrl: './birthday-list.component.html',
  styleUrls: ['./birthday-list.component.scss']
})
export class BirthdayListComponent implements OnInit {
  @Input() public data : any = {}
    
  constructor() { }

  ngOnInit(): void {
  }

}
