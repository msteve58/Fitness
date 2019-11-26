import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Fitness';
  //declare variable to hold response and make it public to be accessible from components.html
  
  //initialize the call using StudentService 
  constructor() { }
  ngOnInit() {
    
  }


}


