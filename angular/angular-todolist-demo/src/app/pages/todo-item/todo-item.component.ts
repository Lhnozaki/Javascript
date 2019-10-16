import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "src/app/models/Todos";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit() {}

  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    };

    return classes;
  }

  onToggle(todo) {
    console.log("toggled");
    todo.completed = !todo.completed;
  }

  onDelete(todo) {
    console.log("deleted");
  }
}
