import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:Http) { 

  }

  getTodoList() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos").pipe(map((res)=>res.json()));
  }
}
