import { Component, EventEmitter, OnInit, Output } from '@angular/core';
declare const runSpeechRecognition: any;
declare const stopRecord: any;
declare const enableRecord:any;
@Component({
  selector: 'app-textarea-speech',
  templateUrl: './textarea-speech.component.html',
  styleUrls: ['./textarea-speech.component.css']
})
export class TextareaSpeechComponent {
  text:string = " \n \n";
  speechServiceActive:boolean=false;
  @Output()
  recordText = new EventEmitter<string>();
  constructor() { }

  changeTextArea(){
    let inputValue = (document.getElementById("conclusionMedicalConsultation") as HTMLInputElement);
    this.recordText.emit(inputValue.value);
  }

  updateTxt(){
    this.recordText.emit(this.text);
  }

  recordVoice(){
    this.speechServiceActive=!this.speechServiceActive;
    if(this.speechServiceActive){
      enableRecord();
      runSpeechRecognition();
    }else{
      stopRecord();
    }
   
  }



}
