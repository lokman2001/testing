import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile, NzUploadListComponent } from 'ng-zorro-antd/upload';
import { map, Observable } from 'rxjs';
import { ModalServiceService } from 'src/app/service/modal-service.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
})
export class ManagementComponent implements OnInit {
  public chartList = [
    {
      chart_name: 'Organization Chart v1.0',
      region: 'Myanmar',
      start_date: '12 Apr 2021',
      end_date: '31 Dec 2021',
      can_remove : false
    },
    {
      chart_name: 'Organization Chart v1.1',
      region: 'Myanmar',
      start_date: '01 Jan 2022',
      end_date: '30 Sep 2022',
      can_remove : false
    },
    {
      chart_name: 'Organization Chart SG 1.0',
      region: 'Singapore',
      start_date: '01 Oct 2022',
      end_date: '30 Dec 2022',
      can_remove : false
    },
    {
      chart_name: 'Organization Chart v2.0',
      region: 'Myanmar',
      start_date: '31 Dec 2022',
      end_date: 'Current',
      can_remove : true
    },
    {
      chart_name: 'Organization Chart TH 1.0',
      region: 'Thailand',
      start_date: '11 Feb 2024',
      end_date: '31 Dec 2025',
      can_remove : false
    },
    {
      chart_name: 'Organization Chart SG 2.0',
      region: 'Singapore',
      start_date: '01 Jan 2023',
      end_date: 'Current',
      can_remove : true
    },
    {
      chart_name: 'Organization Chart TH 2.0',
      region: 'Thailand',
      start_date: '01 Jan 2026',
      end_date: 'Current',
      can_remove : true
    },
  ];
  public countryTagColor : {[key: string] : string} = {
    Myanmar : 'geekblue',
    Singapore : 'magenta',
    Thailand : 'orange',
  }
  public isVisibleCreateEdit = false
  public isVisibleViewChart = false
  public modalTitle = ""
  public imgSrc = ""
  public fileList : NzUploadFile[] =[]
  public delete = ()=>{
    this.modal.showDeleteConfirm();
  }
  public callModal(title : string){
    this.modalTitle = title
    this.toggleModal()
  }
  public toggleModal = ()=>{
    this.isVisibleCreateEdit = !this.isVisibleCreateEdit
  }
  public confirmBox() {
    this.modal.showDeleteConfirm()
  }
  
  public beforeUpload = ( file : NzUploadFile ):boolean =>{
    const isCSV = file.type === 'text/csv'
    
    if(!isCSV){
      this.message.create('error','Sorry, only .csv file support!')
    }
    console.log(this.fileList)
    return isCSV
  }
    public toggleModalView = ()=>{
    this.isVisibleViewChart = !this.isVisibleViewChart
  }
  public removeFile = (i : number )=>{
    // const index = this.fileList.indexOf(file)
    const newList = this.fileList.slice()
    newList.splice(i,1)
    this.fileList = newList
    return true;
  }

  constructor(public modal: ModalServiceService ,public message : NzMessageService) {
  }
  ngOnInit(): void {}
}
