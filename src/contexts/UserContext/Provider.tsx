import React, { useReducer } from 'react';
import { userReducer } from './reducers';
import { UserStateContext, UserDispatchContext, initialState } from './context';

export const UserContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};
