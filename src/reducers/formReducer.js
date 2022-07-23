import {
  DELETE_STREAM,
  EDIT_STREAM,
  GET_ALL_STREAMS,
  GET_STREAM_BY_ID,
  NEW_STREAM,
} from '../actions/types';

export const formReducer = (state = [], action) => {
  switch (action.type) {
    case NEW_STREAM:
      return [
        ...state,
        {
          title: action.payload.title,
          description: action.payload.description,
          codeToDelete: action.payload.codeToDelete,
        },
      ];

    case GET_ALL_STREAMS:
      return [...action.payload];

    case GET_STREAM_BY_ID:
      return {
        ...state,
        ...action.payload,
      };

    case EDIT_STREAM:
      return state.map((item) => {
        if (item._id === action.payload._id) {
          return {
            ...item,
            title: action.payload.title,
            description: action.payload.description,
          };
        }
        return item;
      });

    case DELETE_STREAM:
      return state.filter((stream) => stream.id !== action.payload);

    default:
      return state;
  }
};
