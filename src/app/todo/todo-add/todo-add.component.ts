import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { agregarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  form:FormControl;

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.form=new FormControl('', Validators.required);
  }

  agregarTodo(){
    if(this.form.invalid){
      return;
    }

    const accion=new agregarTodoAction(this.form.value);
    this.store.dispatch(accion);
    this.form.setValue('');


    
    
  }

}
