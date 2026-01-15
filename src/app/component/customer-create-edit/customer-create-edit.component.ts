import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-create-edit',
  templateUrl: './customer-create-edit.component.html',
  styleUrls: ['./customer-create-edit.component.scss']
})
export class CustomerCreateEditComponent implements OnInit {
  public currentUrl = ''
  constructor(public router : Router) { 
  }

  ngOnInit(): void {
  }

}
