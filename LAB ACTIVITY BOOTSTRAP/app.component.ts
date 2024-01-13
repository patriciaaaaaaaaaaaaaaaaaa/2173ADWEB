import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding';
  apptitles = ['If you are interested in starting a new hobby or learning a new skill, you’re in the right place! After reading this crochet starter guide, you’ll be ready to create beautiful wearable items like scarves, hats, and blankets.',
  'Crochet has been around for centuries and is still one of the most popular yarn crafts today. It is a method of creating a looped fabric from yarn with a crochet hook.',
  'Set yourself up for success by choosing hooks and yarns that are easy to work with.'];
  index = 0
  updateTitle(){
    this.index++
    if(this.index==3){
      this.index=0
    }
  }
}

