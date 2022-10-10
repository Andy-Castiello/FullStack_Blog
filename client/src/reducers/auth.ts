//========Constants========

import { LOGOUT } from "../constants/actionTypes";

//========Interfaces========

import action from "../interfaces/action";

//###############################################################//

export default ( state = { authData: null}, action: action ) => {

    switch (action.type){

        case LOGOUT:
            
            localStorage.clear();
            return { ...state, authData: null}
    }

    return state;

}