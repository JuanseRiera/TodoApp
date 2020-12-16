import { Todo } from "./todo/model/todo.model";

import * as fromFiltroActions from "./filter/filter.actions";
import * as fromFiltro from "./filter/filter.reducer";
import * as formTodo from "./todo/todo.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState{
    todos: Array<Todo>;
    filtros: fromFiltroActions.filtrosValidos
}

export const reducers: ActionReducerMap<AppState>={
    todos:formTodo.todoReducer,
    filtros:fromFiltro.filtroReducer
}