import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DropdownOption } from 'src/app/shared/interfaces/dropdown-options.interface';
import { CancerSection } from '../../interfaces/cancer-section.interface';
import { WaitingRoomService } from '../../services/waiting-room.service';

@Component({
  selector: 'app-dot-dropdown-options',
  templateUrl: './dot-dropdown-options.component.html',
  styleUrls: ['./dot-dropdown-options.component.css']
})
export class DotDropdownOptionsComponent implements OnInit  {
  optionsCancer: DropdownOption[] = [];
  data!:CancerSection;
  @Input() options!: DropdownOption[];
  selectedOption!: DropdownOption;
  debouncer: Subject<string> = new Subject();



  constructor(private waitingRoomService:WaitingRoomService) {
   
   }


  ngOnInit(): void {

    this.waitingRoomService.cancer.forEach(element=>{
      this.optionsCancer.push({
        id:Number(element.id),
        name:element.descripcion
      })
    });



    this.debouncer
    .pipe(debounceTime(900))
    .subscribe( valor => {
      this.data.value=valor;
      this.dataEvent.emit(this.data);
    });
  }
  

  @Input() set setData(data: CancerSection | undefined) {
    try {
      console.log(data);
      this.data=data as CancerSection;


      const item:DropdownOption={
        id:-1,
        name:""
      };
     
      console.log(data);
      
        let index = this.optionsCancer.findIndex(
          x => data!.value.length!=0 && x.name.toLowerCase() == data!.value.toLowerCase() 
        );
       
       this.selectedOption=this.optionsCancer[index];
     

    } catch (error) {
      console.log(error);
    }
    
  }

  @Input() set setSelectedOption(selectedOption: DropdownOption | boolean) {
    if(selectedOption!=false){
    console.log(selectedOption);
    this.selectedOption=selectedOption as DropdownOption;
    return;
  }
  }

  @Output()
  dataEvent = new EventEmitter<CancerSection>();

 
  changeStateSelected(){
    this.data.isSelected=!this.data.isSelected;
    this.dataEvent.emit(this.data);
  }

  onChange(event:any) {
    console.log(event.value);
    this.debouncer.next( event.value );
  
  }
}
