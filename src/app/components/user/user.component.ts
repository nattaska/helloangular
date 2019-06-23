import { Component, OnInit } from '@angular/core';
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name:string;
  private age:number;
  private email:string;
  // dictionary
  private address:{
    street:string,
    city:string,
    province:string,
    postcode:number
  }
  // array
  private skills:string[];
  private todoList:Todo[];
  private isEditable:boolean = true;

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.name = "Kasidis Theamtud";
    this.age = 38;
    this.email = "natt.ska@gmail.com";
    this.address = {
      street:"100/634",
      city:"Hua-Hin",
      province:"Prachuap Khiri Khan",
      postcode:77110
    }
    this.skills = ["Programming","Swimming","Basketball"];

    // Call Service

    this.todoService.getTodoList().subscribe((response) => {
      this.todoList = response;
    });
  }

  addSkill(skill) {
    this.skills.unshift(skill);
    return false;
  }

  delSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(index, 1);
      }
    });
    // return false;
  }

  toggleEdit(){
    this.isEditable = !this.isEditable;
  }

}

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}