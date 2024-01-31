import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { LazyLoadEvent, PrimeNGConfig } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PacienteService } from '../../services/patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit,OnDestroy {
    totalRecords!: number;
    customers!: any[];
    loading: boolean = true;
    private ngUnsubscribe = new Subject();
    constructor(private pacienteService:PacienteService,private config: PrimeNGConfig) { }

    ngOnInit() {
      this.pacienteService.patientsRequest();
      this.config.setTranslation({
        accept: 'Aceptar',
        reject: 'Cancelar',
        startsWith: "Empieza Con",
        contains: "Contiene",
        notContains: "No contiene",
        endsWith: "Termina con",
        equals: "Es igual",
        notEquals: "No es igual",
        noFilter: "No Filtrar",
        matchAll: "Coincidir Con Todos",
        matchAny: "Coincidir Con Cualquiera",
        //translations
    });
      



      this.pacienteService.onPatientsData().
      pipe(takeUntil(this.ngUnsubscribe)
      ).subscribe( (data:any): void => {

        this.customers=[];
        const patients:any[]=data as any[];
        patients.forEach(element => {
       
        this.customers.push({
          id:element.id_paciente,
          nombre:element.nombre,
          edad:element.edad,
          foto:element.path!=null?element.foto:'../../../../assets/img/avatar.png',
          imc:30,
          ultimo_diagnostico: element.ultimo_diagnostico
        });
  
        });
        this.totalRecords=this.customers.length;
    
        this.loading = false;
      });




    }

    loadCustomers(event: LazyLoadEvent){
      console.log(event);
      this.pacienteService.patientsRequest();
    }


    ngOnDestroy() {
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
  }

    clear(table: any) {
        table.clear();
    }

}
