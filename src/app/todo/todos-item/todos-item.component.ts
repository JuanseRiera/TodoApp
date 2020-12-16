import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import * as fromTodo from "../todo.actions";

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {

  editando:boolean;

  @Input() todo:Todo;
  @ViewChild('txtInputRef') txtInputRef:ElementRef;

  inputTxt:FormControl;
  checkControl:FormControl;

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.checkControl= new FormControl(this.todo.completado);
    this.inputTxt= new FormControl(this.todo.texto,Validators.required);
  }

  editar(){
    this.editando=true;
    setTimeout(()=>{
      this.txtInputRef.nativeElement.select();
    },1);
  }

  terminarEdicion(){
    this.editando=false;
    let accion=new fromTodo.editarTodoAction(this.todo.id,this.txtInputRef.nativeElement.value);
    this.store.dispatch(accion);
  }

  completarTarea(){
    let accion=new fromTodo.completarTodoAction(this.todo.id);
    this.store.dispatch(accion);
  }

  borrarTodo(){
    let accion=new fromTodo.borrarTodoAction(this.todo.id);
    this.store.dispatch(accion);
  }

}
