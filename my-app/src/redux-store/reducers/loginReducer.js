import actions from "../actions";
const defaultStore = {user: "Prabhat"};

export const logginReducer = (state=defaultStore, action)=>{
    switch(action.type){
        case actions.LOGIN:
            return {
                ...state,
                user: action.payload
            };
            break;
        default: return state;
    }
}