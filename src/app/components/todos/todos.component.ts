import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First ToDo',
        completed: false
      },
      {
        content: 'Second ToDo',
        completed: true
      }
    ]
  }

}
