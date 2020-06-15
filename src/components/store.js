import React, { createContext, useReducer } from 'react';

const initialState = {
  isClicked: false,
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'IS_CARD_CLICKED':
        return {
          isClicked: true,
        };
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
