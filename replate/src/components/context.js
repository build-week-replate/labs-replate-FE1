import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "login": {
      console.log('Payload: ', action.payload)
      return { ...state, isLoggedIn: true, user: action.payload };
    }
    case "get_schedules": {
      return { ...state, isLoggedIn: true, schedules: action.payload };
    }
    case 'submit_schedule': {
      return { ...state, isLoggedIn: true, schedules: action.payload }
    }
    case "logout": {
      return { ...state, isLoggedIn: false };
    }
    default: {
      return state;
    }
  }
}

const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    schedules: [],
    type: null,
    id: null
  }
};

export const Context = React.createContext();

const Provider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Provider;