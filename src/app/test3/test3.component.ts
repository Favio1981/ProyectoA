import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss']
})
export class Test3Component{

  @Input() name: string = 'Angular ';
  @Input() lastName: string = 'Version 12';
  @Output() onSendData = new EventEmitter(null);
  
  
  ShowData(event: any){

    console.log ('Event click:', event);
//output personalizado puede enviar json etc
    this.onSendData.emit(
      'general data '  + this.name + '' +this.lastName
      );
  
  }
}
