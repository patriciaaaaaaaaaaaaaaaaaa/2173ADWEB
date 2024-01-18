import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  imageUrl:string="assets/logo.png"; 
  imageW: number = 110;
  imageH: number = 100;
  
  clientName = 'Pat';
  appliedCSS = 'purple';
  notAppliedCSS = false;
  myColor = 'pink';

  showData($event: any){
    console.log('Button is clicked:');
    if ($event){
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  clickCount=0
    clickMe(){
      this.clickCount++;
    }
}

