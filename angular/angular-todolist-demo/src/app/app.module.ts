import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app/app.component";
import { TodosComponent } from "./pages/todos/todos.component";
import { TodoItemComponent } from "./pages/todo-item/todo-item.component";
import { HeaderComponent } from './pages/layout/header/header.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoItemComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
