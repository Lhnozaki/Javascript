import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todos";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: "First Task",
        completed: false
      },
      {
        id: 2,
        title: "Second Task",
        completed: true
      },
      {
        id: 3,
        title: "Third Task",
        completed: false
      }
    ];
  }
}
