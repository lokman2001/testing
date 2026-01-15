import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() icon = "";
  @Input() title = "";
  @Input() description = "";
  @Input() link = "";
  constructor() { }

  ngOnInit(): void {
  }

}
