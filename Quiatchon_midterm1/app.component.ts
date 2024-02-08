import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midterm_1';
  presentDate = new Date();

  time$: Observable<Date>;
  constructor () {
    this.time$ = interval(1000).pipe(
      map(() => new Date())
    );
  }
  price: number = 20000; ngOnInit() {
  }

  Fruits = [" Apple ", " Orange", " Grapes", " Mango", " Kiwi", " Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  data: object ={
    name: "Patricia Quiatchon", age:20 , food:"Hotdog",
    languages:[
      {lname: 'js', level:'Wizard'},
      {lname: 'PHP', level:'Average'},
      {lname: 'Flutter', level:'Beginner'},
    ]
  }
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}}
}
