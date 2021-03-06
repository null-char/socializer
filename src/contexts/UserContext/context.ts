import React from 'react';
import { Action } from './actionTypes';

// current user state

type Dispatch = (action: Action) => void;
export type State = {
  email: string;
  userId: string;
  userHandle: string;
  userProfile: string;
  bio: string;
  location: string;
  fetchingUser: boolean;
};

export const initialState: State = {
  email: '',
  userId: '',
  userHandle: '',
  userProfile: '',
  bio: '',
  location: '',
  fetchingUser: false
};

export const UserStateContext = React.createContext<State | undefined>(
  undefined
);
export const UserDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

export const useUserState = () => {
  const context = React.useContext(UserStateContext);
  if (context === undefined)
    throw new Error('Context must be used within a UserProvider');
  return context;
};

export const useUserDispatch = () => {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined)
    throw new Error('Context must be used within a UserProvider');
  return context;
};
