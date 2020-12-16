import * as fromFiltro from "./filter.actions";

const estadoIncial:fromFiltro.filtrosValidos='Todos';

export function filtroReducer(state=estadoIncial,action:fromFiltro.actions):fromFiltro.filtrosValidos{

    switch (action.type) {
        case fromFiltro.SETFILTRO:
            
            return action.filtro;
    
        default:
            return state;
    }
}