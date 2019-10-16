import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "src/app/models/Todos";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    };

    return classes;
  }

  isChecked(todo) {
    return todo.completed;
  }

  onToggle(todo) {
    console.log("toggled");
    todo.completed = !todo.completed;

    this.todoService.toggleCompleted(todo).subscribe(data => console.log(data));
  }

  onDelete(todo) {
    console.log("deleted");
  }
}
