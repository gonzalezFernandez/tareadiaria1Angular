import { Component } from "@angular/core";

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html'

})
export class DiasComponent {

dias:number[] = [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,24,27,28,29,30 ];




borrar():void{


  this.dias.shift();

}



}
