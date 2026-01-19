import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-contact-person-card',
  templateUrl: './contact-person-card.component.html',
  styleUrls: ['./contact-person-card.component.scss'],
})
export class ContactPersonCardComponent implements OnInit {
  @Input() contact :any = {};
  @Output() edit = new EventEmitter<any>()
  @Output() delete = new EventEmitter<any>()
  clickEdit(){
    this.edit.emit()
  }
  clickDelete(){
    this.delete.emit()
  }
  constructor() {}

  ngOnInit(): void {}
}
