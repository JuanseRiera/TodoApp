import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as fromFilterActions from "../../filter/filter.actions";
import * as formTodo from "../../todo/todo.actions";
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  tareasPendientes:number=0;
  filtros:Array<fromFilterActions.filtrosValidos>=['Todos','Completados','Pendientes'];
  filtroActual: fromFilterActions.filtrosValidos;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(resp=>{
      this.contarTareasPendientes(resp.todos);
      this.filtroActual=resp.filtros;
    })
  }

  cambiarFiltro(filtro:fromFilterActions.filtrosValidos){
    let accion=new fromFilterActions.setFilterAction(filtro);
    this.store.dispatch(accion);
  }

  contarTareasPendientes(tareas:Array<Todo>){
    this.tareasPendientes=tareas.filter(x=>x.completado==false).length;
  }

  limpiarCompletados(){
    let accion=new formTodo.borrarTodoCompletadosAction();
    this.store.dispatch(accion);
  }

}
