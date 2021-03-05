import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  //8'th task
  @Input() item: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
