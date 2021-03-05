import { Component, OnInit } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {

  //here we have a dependency injection from ParentComponent
  constructor(private parent: ParentComponent) { }

  //9'th task, this function is calling the pressedButton()
  //  from ParentComponent(we use the injected field)
  pressBtn(){
    this.parent.pressedButton();
  }
  ngOnInit(): void {
    
  }

}
