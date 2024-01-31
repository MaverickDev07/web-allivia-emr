import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, Inject } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Option } from 'src/app/medical-consultations/interfaces/options.interface';
import { DropdownOption } from 'src/app/shared/interfaces/dropdown-options.interface';

@Component({
  selector: 'app-dropdown-options',
  templateUrl: './dropdown-options.component.html',
  styleUrls: ['./dropdown-options.component.css']
})
export class DropdownOptionsComponent  implements OnInit {
  options: Option[]=[];
  @Input() label: string="";
  optionsSelected?: Option[]=[];
  @Output()
  selectedDropdownOptions = new EventEmitter<Option[]>();
  debouncer: Subject<string> = new Subject();
  selectedOption!: Option | null;

  @Input() set setOptions(selected: Option[] | undefined) {
    this.options=selected as Option[];
  } 

  @Input() set setSelected(selected: Option[] | undefined) {
    this.optionsSelected=selected as Option[];
  } 

  
  constructor(@Inject(DOCUMENT) private _document: HTMLDocument,private elementRef: ElementRef) {

   }

   
  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(900))
    .subscribe( valor => {

   
      if(this.options.filter(x=>x.descripcion!.toLowerCase()===valor.toLowerCase()).length>0 && this.optionsSelected!.filter(x=>x.descripcion!.toLowerCase()===valor.toLowerCase()).length==0){
        this.optionsSelected?.push(this.options.filter(x=>x.descripcion!.toLowerCase()===valor.toLowerCase())[0]);
      }


     
      if(valor.length==0 || this.optionsSelected!.filter(x=>x.descripcion!.toLowerCase()===valor.toLowerCase()).length>0){
        this.selectedDropdownOptions.emit(this.optionsSelected);
        return;
      }


      this.optionsSelected?.push({
          id:"-1",
          descripcion:valor,
      })

     
     
      
      this.selectedDropdownOptions.emit(this.optionsSelected);

    });
  }

  onChange(event:any) {
 
    if(this.selectedOption!.descripcion==undefined){
    this.debouncer.next( event.value );
    return;
    }

   
    this.selectedOption=event.value;
    let descripcion:string=this.selectedOption!.descripcion!.toLowerCase();
    if(event.value.descripcion!='' && this.optionsSelected!.filter(x=>x.descripcion!.toLowerCase()===descripcion)[0]==undefined){
      this.optionsSelected!.push(event.value);
    }

  
    this.selectedDropdownOptions.emit(this.optionsSelected);
  }

  removeDiseased(diseased:any){
    this.optionsSelected!.splice(this.optionsSelected!.indexOf(diseased), 1);
    this.selectedDropdownOptions.emit(this.optionsSelected);
  }

}
