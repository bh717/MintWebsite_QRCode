/* eslint-disable import/no-anonymous-default-export */
import { Dispatch, AnyAction } from "redux"
import ActionTypes from "../constants/ActionTypes"

interface AuthState {
  title : string,
  description : string,
  external : string,
  url : string,
}

const INIT_STATE : AuthState = {
    title : "",
    description : "",
    external : "",
    url : "",
};
  
export default (state = INIT_STATE, action: AnyAction) => {

    let { payload } = action

    switch (action.type) {
      case ActionTypes.ADD_METADATA:
        return {
            ...state,
            title : payload.title,
            description : payload.description,
            external : payload.external,
            url : payload.url
        }
      default:
        return state;
    }
}
  