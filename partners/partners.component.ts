import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
//Image interpolation/binding
imageUrl:string="./assets/bg2.jpeg"; 
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

// staff = [ 
//   { Company: 'Microsoft', TradeMark: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png', Sponsorship: 'Platinum',Website: 'View Website'},   
//   { Company: 'Apple, Inc.', TradeMark: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/600px-Apple-logo.png', Sponsorship: 'Gold', Website: 'View Website'},   
//   { Company: 'Amazon', TradeMark: 'https://purepng.com/public/uploads/large/amazon-logo-s3f.png', Sponsorship: 'Silver', Website: 'View Website'},   
//   { Company: 'Google, Inc.', TradeMark: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png', Sponsorship: 'Bronze', Website: 'View Website'}
// ];

staff = [ 
  { company: "Microsoft", trademark: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png', sponsorship: 'Platinum', website: "Go to Website" },   
  { company: "Apple, Inc.", trademark: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/600px-Apple-logo.png', sponsorship: 'Gold', website: "Go to Website" }, 
  { company: "Amazon", trademark: 'https://purepng.com/public/uploads/large/amazon-logo-s3f.png', sponsorship: 'Silver', website: "Go to Website"}, 
  { company: "Google, Inc.", trademark: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png', sponsorship: 'Bronze', website: "Go to Website" }, 
  ];

}
