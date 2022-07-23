import { BACKGROUND_MODE } from '../actions/types';

const initialState = {
  backgroundMode: false,
};

export const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case BACKGROUND_MODE:
      return {
        ...state,
        backgroundMode: !state.backgroundMode,
      };
  }
  return state;
};
