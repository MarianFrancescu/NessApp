import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name = 'Parent'
  constructor() { }

  //9'th task
  pressedButton(){
    console.log("Pressed");
  }
  ngOnInit(): void {
  }

}
