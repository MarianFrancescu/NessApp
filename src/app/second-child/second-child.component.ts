import { Component, OnInit } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { ClassesService } from '../services/classes.service';
@Component({
  selector: 'second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {

  //here we have a dependency injection from ParentComponent
  constructor(private parent: ParentComponent, private classService: ClassesService) { }

  //9'th task, this function is calling the pressedButton()
  //  from ParentComponent(we use the injected field)
  pressBtn(){
    this.parent.pressedButton();
  }

  classes = {
    name: 'Play',
    students: [{name: "Jon"}, {name: "Pippin"}],
    teachers: [{name: 'Gandalf'}]
  };
  ngOnInit(): void {
  }
  addClass(){
    this.classService.postData(this.classes);
  }

}
