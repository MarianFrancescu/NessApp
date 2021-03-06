import { Injectable } from '@angular/core';
import { Class } from '../models/class';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http: HttpClient) { }

  //10'th task service for get data from server
  //  i write some classes in a json to test this feature
  getData(): Observable<Class[]>
  {
    return this.http.get<Class[]>('./app/api/classes.json');
  }

  //11'th task service for post data to server
  postData(data: Class): Observable<any>{
    const jData=JSON.stringify(data);
    return this.http.post('./app/api/classes.json', jData, {'headers': { 'content-type': 'application/json'}});
  }
 
}
