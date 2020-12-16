import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import { filtrosValidos } from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform(todos: Array<Todo>, filter:filtrosValidos): Array<Todo> {
    console.log(todos,filter);
    
    switch (filter) {
      case 'Todos':return todos;
      case 'Pendientes':return todos.filter(x=> x.completado==false);
      case 'Completados':return todos.filter(x=> x.completado==true);
      default:return todos;
    }
  }

}
