import actions from "../actions";

export const loginActionCreator = (user) => dispatch =>{
    dispatch({
        type: actions.LOGIN,
        payload: user
    });
}