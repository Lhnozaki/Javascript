import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from "../models/Todos";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todosUrl: string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);

    // return [
    //   {
    //     id: 1,
    //     title: "First Task",
    //     completed: false
    //   },
    //   {
    //     id: 2,
    //     title: "Second Task",
    //     completed: true
    //   },
    //   {
    //     id: 3,
    //     title: "Third Task",
    //     completed: false
    //   }
    // ];
  }
}
