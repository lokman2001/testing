import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

    constructor(public modal: NzModalService) { }
    showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure delete these items',
      nzOkText: 'Confirm',
      nzOkType: 'primary',
      nzMaskStyle : { 'top' : '0' },
    
      nzZIndex: 6000,
      nzIconType: '',
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'Cancel',
      nzOnCancel: () => console.log('Cancel'),
    });
  }
}
