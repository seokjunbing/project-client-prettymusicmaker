import { ActionTypes } from '../actions';

const AuthReducer = (state = { authenticated: false }, action) => {
  switch (action.type) {

    case ActionTypes.AUTH_ERROR:
      return { ...state, authenticated: false };

    case ActionTypes.AUTH_USER:
      return { ...state, authenticated: true };

    case ActionTypes.DEAUTH_USER:
      return { ...state, authenticated: false };

    default:
      return state;
  }
};

export default AuthReducer;
