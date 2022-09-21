import ActionTypes from '../constants/ActionTypes';
import { AnyAction, Dispatch } from "redux"
import { link } from 'fs';

export function addMetadata(_title: string, _description: string, _external: string , _url : string) {
  return (dispatch : Dispatch<AnyAction>) => {
    return dispatch({
      type: ActionTypes.ADD_METADATA,
      payload: {
        title: _title,
        description : _description,
        external: _external,
        url: _url,
      }
    })
  };
}
