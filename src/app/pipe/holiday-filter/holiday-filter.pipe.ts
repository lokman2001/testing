import { Pipe, PipeTransform } from '@angular/core';
import { fileURLToPath } from 'url';

@Pipe({
  name: 'holidayFilter'
})
export class HolidayFilterPipe implements PipeTransform {

  transform(data  : any[] , filter : string): any[] {
    let Temp : any = []
    if(filter === "All"){
      return data;
    }else{
      data.filter((data)=>{
        if(data.country === filter){
          Temp.push(data)
        }
      } )
      return Temp
    }
  }

}
