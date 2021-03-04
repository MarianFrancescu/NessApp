import { Component, OnInit } from '@angular/core';
import { Class } from '../models/class';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  classes = [{
    name: 'Transfiguration',
    students: [{name: "Harry"}, {name: "Ginny"}],
    teachers: [{name: 'Professor McGonagall'}]
  },
  {
    name: 'Potions',
    students:[{name: 'Ron'}, {name: 'Hermione'}],
    teachers: [{name: 'Professor Snape'}]
  },
  {
    name: 'Defense Against Dark Arts',
    students: [{name: 'Draco'}, {name: 'Cho'}],
    teachers: []
  }
]

  //3'rd task
  //function for filtering class by name "Ron"
  filterArray(hogwardsClass: Class[])
  {
    let hwClass: Class[] = [];
  
    for(let c of hogwardsClass)
    {
      for(let s of c.students)
      {
        if(s.name == "Ron")
          hwClass.push(c);
      }
    }
    return hwClass;
  }

  //5'th task
  //function for deleting first class(first class is at index 0)
  deleteFirstClass(){
    this.classes.splice(0,1);
  }

  //6'th task, is green is used to set the tr background to green
  isgreen: boolean = true;

  resetColor(){
    this.isgreen =!this.isgreen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
