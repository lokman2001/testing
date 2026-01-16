import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-person-card',
  templateUrl: './contact-person-card.component.html',
  styleUrls: ['./contact-person-card.component.scss'],
})
export class ContactPersonCardComponent implements OnInit {
  @Input() contact :any = {};
  constructor() {}

  ngOnInit(): void {}
}
