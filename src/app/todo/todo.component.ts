import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { completarTodosTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado: boolean=false;

  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  marcarTodos(){
    this.completado=!this.completado;
    let accion=new completarTodosTodoAction(this.completado);
    this.store.dispatch(accion);
  }
}
