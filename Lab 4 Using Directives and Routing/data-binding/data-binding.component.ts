import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  title = 'This is a Data Binding';
  clientName = 'Pat';
  appliedCSS = 'purple';
  notAppliedCSS = false;
  myColor = 'pink';

  showData($event: any){
    console.log('Button is clicked')
    if ($event){
      console.log($event.target);
      console.log($event.target.value)
    }
  }
}
