import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ModalServiceService } from 'src/app/service/modal-service.service';


interface ItemData {
  name: string;
  chinese: number;
  math: number;
  english: number;
}

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  public customerData = [
    {
      id: 1,
      customer_name: 'IBM Singapore Pte Ltd',
      initial_name: 'IBM',
      phone: '09782345678',
      fax_number: '09782345678',
      address: '9 Changi Business Park',
    },
    {
      id: 2,
      customer_name: 'AB Co.Ltd',
      initial_name: 'AB',
      phone: '09782345678',
      fax_number: '09782345678',
      address: '171B Edgedale Plains',
    },
    {
      id: 3,
      customer_name: 'Quantum Innovations',
      initial_name: 'QI',
      phone: '09782345678',
      fax_number: '09782345678',
      address: '3 Defu Lane Singapore',
    },
    {
      id: 4,
      customer_name: 'Synergy Tech Group',
      initial_name: 'STG',
      phone: '09782345678',
      fax_number: '09782345678',
      address: '4 Leng Kee Road',
    },
    {
      id: 5,
      customer_name: 'Provision Consulting',
      initial_name: 'PC',
      phone: '09782345678',
      fax_number: '09782345678',
      address: '511 Bukit Batok Street',
    },
    {
      id: 6,
      customer_name: 'Apex Solutions',
      initial_name: 'APEX',
      phone: '09782345678',
      fax_number: '09782345678',
      address: '105 Cecil Street ',
    },
    {
      id: 7,
      customer_name: 'Premier Service',
      initial_name: 'PS',
      phone: '09782345678',
      fax_number: '09782345678',
      address: '221 HendersonRoad ',
    },
    {
      id: 8,
      customer_name: 'Creative Business',
      initial_name: 'CB',
      phone: '09 782345678',
      fax_number: '093234567',
      address: '1A Woodlands Centre Road',
    },
  ];

  sortCustomerNameFn = (a: any, b: any) =>
    a.customer_name.localeCompare(b.customer_name);
  sortInitialNameFn = (a: any, b: any) =>
    a.initial_name.localeCompare(b.initial_name);
  sortPhoneFn = (a: any, b: any) => a.phone.localeCompare(b.phone);
  sortFaxFn = (a: any, b: any) => a.fax.localeCompare(b.fax);
  sortAddressFn = (a: any, b: any) => a.address.localeCompare(b.address);

  public confirmBox() {
    this.modal.showDeleteConfirm()
  }

  constructor(public modal : ModalServiceService) {}

  ngOnInit(): void {}
}
