import _ from 'lodash';
import { CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      //   return { ...state, ..._.mapKeys(action.payload, 'id') } //lodash=> mapKeys devuelve un objeto con clave el 2do arg y valor cada item del array(1er arg)
      const newObject = {};
      action.payload.forEach((item) => (newObject[item.id] = item));
      return { ...state, ...newObject };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      //   return _.omit(state, action.payload);//lodash=> state: objeto a modificar, el 2do arg es la clave que queremos borrar de dicho objeto
      const { [action.payload]: omit, ...rest } = state;
      return rest;
    default:
      return state;
  }
};
