/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnyAction } from "redux"
import ActionTypes from "../constants/ActionTypes"

interface AppState {
}

const INIT_STATE: AppState = {
};
  
export default (state = INIT_STATE, action: AnyAction) => {
    let { payload } = action
    
    switch (action.type) {
        default:
            return state;
    }
}
  