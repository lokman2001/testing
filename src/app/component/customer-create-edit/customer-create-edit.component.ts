import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalServiceService } from 'src/app/service/modal-service.service';

@Component({
  selector: 'app-customer-create-edit',
  templateUrl: './customer-create-edit.component.html',
  styleUrls: ['./customer-create-edit.component.scss'],
})
export class CustomerCreateEditComponent implements OnInit {
  public currentUrl = '';
  public option = ""
  public contacts: any = [
    {
      name : "Gee Yen Heng CMOD",
      email : "geeyenheng@maybank-ke.com.sg",
      phone : "09253774201",
      important : true
    },
    {
      name : "Jerome Bugay Macaraeg",
      email : "jeromebugaymacaraeg@maybank-ke.com.sg",
      phone : "09253774201",
      important : false
    },
    {
      name : "Goh Hung Kuan",
      email : "gohhk@maybank-ke.com.sg",
      phone : "09253774201",
      important : false
    }
  ];
  public isVisible = false
  public modalTitle = ""
  public delete = ()=>{
    this.modal.showDeleteConfirm();
  }
  public callModal(title : string){
    this.modalTitle = title
    this.toggleModal()
  }
  public toggleModal = ()=>{
    this.isVisible = !this.isVisible
  }
  constructor(public router: Router , public modal: ModalServiceService) {
    this.currentUrl= this.router.url
    if(this.currentUrl === "/customer/create"){
      this.option = "Create"
    }
    if(this.currentUrl === "/customer/edit"){
      this.option = "Edit"
    }
  }

  ngOnInit(): void {}
}
