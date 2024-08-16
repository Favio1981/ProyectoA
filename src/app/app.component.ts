import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProyectA';
  myStatus = 'my status!!';

constructor(){
  const testMap =[1,2,3,4,5].map(item =>item *2);
  console.log(testMap);


const testForeach =[1,2,3,4,5].forEach(item =>item);
console.log(testMap);


}

printDataTest2(event: any){
  console.log('componente test2 output:',event);
}

printData(event: any){
  console.log('componente test3 output:',event);
}


}
