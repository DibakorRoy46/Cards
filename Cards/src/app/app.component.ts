import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {
      title:'Neat Tree',
      imageUrl:'assets/tree.jpeg',
      userName:'nature',
      content:'I sam the neat tree today'
    },
    {
      title:'Snowy Mountain',
      imageUrl:'assets/mountain.jpeg',
      userName:'MountainLover',
      content:'Here is picture of snowy mountian'
    },
    {
      title:'Mountain Biking',
      imageUrl:'assets/biking.jpeg',
      userName:'biking1234',
      content:'I did some biking today'
    }
  ];
}
