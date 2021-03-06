import { Component, Input, OnInit } from '@angular/core';
import { Class } from '../models/class';
import { ClassesService } from '../services/classes.service';

@Component({
  selector: 'first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  //8'th task
  @Input() item: string;
  

  //10'th task: injected ClassesService in this component
  //  displayed the objects in console on the ngOnInit method
  constructor(private classData: ClassesService) {
  }

  onClick()
  {
    this.classData.getData().subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.classData.getData().subscribe(res => {
      console.log(res);
    });
  }

}
