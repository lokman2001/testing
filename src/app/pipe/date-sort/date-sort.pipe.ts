import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSort',
})
export class DateSortPipe implements PipeTransform {
  transform(data: any[], key: string): any[] {
    let getDate = new Date();
    let Data: any = [];
    if (key === 'today' || key === 'Today') {
      data.filter((data) => {
        let temp = new Date(data.birthday);
        if (
          temp.getDate() === getDate.getDate() &&
          temp.getMonth() === getDate.getMonth()
        ) {
          Data.push(data);
        }
      });

    }
    if (key === 'thisMonth' || key === 'ThisMonth') {
      data.filter((data) => {
        let temp = new Date(data.birthday);
        if (
          temp.getDate() !== getDate.getDate() &&
          temp.getMonth() === getDate.getMonth()
        ) {
          Data.push(data);
        }
      });
    }
    if (key === 'thisYear' || key === 'ThisYear') {
       data.filter((data) => {
        let temp = new Date(data.birthday);
        if (
          temp.getDate() !== getDate.getDate() &&
          temp.getMonth() !== getDate.getMonth() && 
          temp.getMonth() > getDate.getMonth()
        ) {
          Data.push(data);
        }
      });
    }

    return Data;
  }
}
