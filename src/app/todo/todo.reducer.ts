import { element } from "protractor";
import { Todo } from "./model/todo.model";
import * as fromTodo from "./todo.actions";

const todo1 = new Todo("Huevos");
const todo2 = new Todo("Mayonesa");
const estadoInicial: Array<Todo> = [todo1, todo2];

export function todoReducer(state = estadoInicial, action: fromTodo.acciones) {

    switch (action.type) {
        case fromTodo.AGREGARTODO:
            let todo = new Todo(action.payload);
            return [...state, todo];

        case fromTodo.COMPLETARTODO:
            return state.map(element => {
                if (element.id == action.payload) {
                    return {
                        ...element,
                        completado: !element.completado
                    }
                } else {
                    return element;
                }
            });

        case fromTodo.COMPLETARTODOSTODO:
            return state.map(element => {
                return {
                    ...element,
                    completado: action.payload
                }
            });


        case fromTodo.EDITARTODO:
            return state.map(element => {
                if (element.id == action.number) {
                    return {
                        ...element,
                        texto: action.texto
                    }
                } else {
                    return element;
                }
            });

        case fromTodo.BORRARTODO:
            return state.filter(x => x.id != action.payload);

        case fromTodo.BORRARCOMPLETADOSTODO:
            return state.filter(x => x.completado == false);

        default:
            return state;
    }
}