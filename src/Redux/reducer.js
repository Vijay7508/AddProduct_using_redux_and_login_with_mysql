// reducer.js
import { INSERT_DATA } from './Action';

const initialState = {
  data: []
};

export default function dataReducer(state = initialState, action){
  switch (action.type) {
    case INSERT_DATA:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
};
