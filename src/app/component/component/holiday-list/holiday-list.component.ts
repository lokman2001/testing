import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.scss']
})
export class HolidayListComponent implements OnInit {
  @Input() public holiday : any = {}
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.holiday.country)
    const flag : string  = `../../../../assets/flag-icons/${this.holiday.country}.png`
  }

}
