import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
//Using ngIf to toggle text display
showText: boolean = true;
toggleText() {
    this.showText = !this.showText;
  }


//Image interpolation/binding
imageUrl:string="assets/logo.png"; 
imageW: number = 110;
imageH: number = 100;

//Using *ngIf
isLogIn:boolean=true; 
isLogOut:boolean=false; 

// *ngfor example 

staff = [ 
{ firstName: 'Patricia', lastName: 'Quiatchon', email: 'patricia@test.com', role: 'User' },   
{ firstName: 'Ella', lastName: 'Manalansan', email: 'ella@test.com', role: 'Admin' }, 
{ firstName: 'Jaira', lastName: 'Jaworski', email: 'jaira.jaworski@test.com', role: 'Admin' }, 
{ firstName: 'Shane', lastName: 'Paras', email: 'shane@test.com', role: 'User' }, 
{ firstName: 'Ezralyn', lastName: 'Castro', email: 'ezra.castro@test.com', role: 'User' } 
];

// Another *ngfor example 
products = [
  { imageUrl: 'https://images-platform.99static.com//64RVHLYKS-sAgw4WkNz2PauaEPQ=/117x65:1122x1070/fit-in/590x590/99designs-contests-attachments/121/121740/attachment_121740866', name: 'Fancy Product 1', price: '$40.00 - $80.00' },
  { imageUrl: 'https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/94891/optimized_large_thumb_stage.jpg', name: 'Fancy Product 2', price: '$50.00 - $90.00' },
  { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOzUTAOqJGC8faoMlHJYIBc_Oa9gYf40vcXl5avoLDasl2__iPTZmOhNQnnjs-eFQwSY&usqp=CAU', name: 'Fancy Product 3', price: '$60.00 - $100.00' },
  // Add more product items as needed
];

}
