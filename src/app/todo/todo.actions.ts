import { Action } from "@ngrx/store";
import { Todo } from "./model/todo.model";

export const AGREGARTODO='[TODO] Agregar TODO';
export const COMPLETARTODO='[TODO] Completar TODO';
export const COMPLETARTODOSTODO='[TODO] CompletarTodos TODO';
export const EDITARTODO='[TODO] Editar TODO';
export const BORRARTODO='[TODO] Borrar TODO';
export const BORRARCOMPLETADOSTODO='[TODO] Borrar todos los completados TODO';

export class agregarTodoAction implements Action{
    readonly type = AGREGARTODO;
    constructor(public payload:string){
    }
}

export class completarTodoAction implements Action{
    readonly type = COMPLETARTODO;
    constructor(public payload:number){
    }
}


export class completarTodosTodoAction implements Action{
    readonly type = COMPLETARTODOSTODO;
    constructor(public payload:boolean){
    }
}


export class editarTodoAction implements Action{
    readonly type = EDITARTODO;
    constructor(public number:number ,public texto:string){
    }
}

export class borrarTodoAction implements Action{
    readonly type = BORRARTODO;
    constructor(public payload:number){
    }
}

export class borrarTodoCompletadosAction implements Action{
    readonly type = BORRARCOMPLETADOSTODO;
}

export type acciones = agregarTodoAction | completarTodoAction | editarTodoAction | borrarTodoAction | completarTodosTodoAction | borrarTodoCompletadosAction;