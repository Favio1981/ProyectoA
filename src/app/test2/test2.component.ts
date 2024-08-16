import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component{


  @Input('status') statusTest: string = 'hola buen viernes working';
  @Output ('onSetData') SendData = new EventEmitter(null);


  onClickTest(event: any){

    console.log ('Event click:', event);
//output personalizado puede enviar json etc
    this.SendData.emit({
        name: 'Fav',
        status: 'Master'

    });

  }

}
