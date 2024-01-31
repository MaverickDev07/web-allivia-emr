import { Component, OnDestroy} from '@angular/core';
import {DialogService} from 'primeng/dynamicdialog';
import {MessageService} from 'primeng/api';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import { ClinicHistoryComponent } from '../clinic-history/clinic-history.component';
import { ConclusionsComponent } from '../conclusions/conclusions.component';
import { PhysicalExaminationModalComponent } from '../physical-examination-modal/physical-examination-modal.component';

@Component({
  selector: 'app-accordion-allivia-point',
  templateUrl: './accordion-allivia-point.component.html',
  styleUrls: ['./accordion-allivia-point.component.css'],
  providers: [DialogService, MessageService]
})
export class AccordionAlliviaPointComponent  implements OnDestroy  {

  ref!: DynamicDialogRef;
  constructor(public dialogService: DialogService, public messageService: MessageService) {}



  clinicHistory() {
   
      this.ref = this.dialogService.open(ClinicHistoryComponent, {
          showHeader:false,
          width: '90%',
          contentStyle: {"max-height": "650px", "overflow-x": "hidden","background-color":"#F5F6FA","border-radius":" 25px"},
          baseZIndex: 10000,
          dismissableMask: false,
      });

      let dialogRef = this.dialogService.dialogComponentRefMap.get(this.ref);

      if(dialogRef){
        dialogRef.changeDetectorRef.detectChanges();
        const instance = dialogRef.instance.componentRef.instance as ClinicHistoryComponent;
        instance.closePopupEvent.subscribe((obj) =>{ 
          this.closeDialog();
         });
      }

      
     
  }


  conclusions() {
   
    this.ref = this.dialogService.open(ConclusionsComponent, {
        showHeader:false,
        width: '55%',
        contentStyle: {"max-height": "700px", "overflow-x": "hidden","background-color":"#F5F6FA","border-radius":" 25px"},
        baseZIndex: 10000,
        dismissableMask: true,

    });

    let dialogRef = this.dialogService.dialogComponentRefMap.get(this.ref);

    if(dialogRef){
      dialogRef.changeDetectorRef.detectChanges();
      const instance = dialogRef.instance.componentRef.instance as ConclusionsComponent;
    instance.closePopupEvent.subscribe((obj) =>{ 
        this.closeDialog();
       });
    }

    
   
}


physicalExamination() {
   
  this.ref = this.dialogService.open(PhysicalExaminationModalComponent, {
      showHeader:false,
      width: '60%',
      contentStyle: {"max-height": "850px", "overflow-x": "hidden","background-color":"#F5F6FA","border-radius":" 25px"},
      baseZIndex: 10000,
      dismissableMask: true,

  });

  let dialogRef = this.dialogService.dialogComponentRefMap.get(this.ref);

  if(dialogRef){
    dialogRef.changeDetectorRef.detectChanges();
    const instance = dialogRef.instance.componentRef.instance as PhysicalExaminationModalComponent;
  instance.closePopupEvent.subscribe((obj) =>{ 
      this.closeDialog();
     });
  }

  
 
}






  closeDialog(){
    if (this.ref) {
      this.ref.close();
  }
  }

  ngOnDestroy() {
      if (this.ref) {
          this.ref.close();
      }
  }

 
}
