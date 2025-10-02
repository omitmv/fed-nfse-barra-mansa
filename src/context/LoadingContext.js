import { createContext, useReducer, useContext } from 'react';
import { START_LOADING, STOP_LOADING } from './constant';

const LoadingContext = createContext();

const initialState = { isLoading: false };

function loadingReducer(state, action) {
  switch (action.type) {
    case START_LOADING:
      return { isLoading: true };
    case STOP_LOADING:
      return { isLoading: false };
    default:
      return state;
  }
}

export const LoadingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loadingReducer, initialState);

  return (
    <LoadingContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
