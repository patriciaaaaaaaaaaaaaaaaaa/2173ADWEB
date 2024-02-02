import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
//Image interpolation/binding
imageUrl:string="./assets/bg3.jpg"; 
imageW: number = 1550;
imageH: number =600;

//Event Binding
showData($event: any) {
  console.log('Button is clicked!');
  if ($event) {
    console.log($event.target);
    console.log($event.target.value);
  }
}
}
