import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'shortDateApp'
})
export class ShortDateAppPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}
  transform(timestamp:Date): String {
  
   

    let result:string | null=this.datePipe.transform(timestamp, 'mediumDate');
    try {
      if(timestamp!=null){
        let data=result!.split(",");
        let part1=data[0].split(" ");
        result=part1[1]+" "+part1[0]+","+data[1];
    
      }
    } catch (error) {
        console.log(error);
    }

  
   

    return result || "";
  }

}
