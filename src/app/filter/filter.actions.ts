import { Action } from "@ngrx/store";
import { type } from "os";

export type filtrosValidos= 'Todos' | 'Completados' | 'Pendientes';

export const SETFILTRO= '[Filter] setFiltro';

export class setFilterAction implements Action{
    readonly type = SETFILTRO;
    constructor(public filtro:filtrosValidos){}
}

export type actions = setFilterAction;