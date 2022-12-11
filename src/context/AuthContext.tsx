import setAuthToken from '@/components/@helper/utils/setAuthToken';
import { createContext, PropsWithChildren, useReducer, useEffect } from 'react';

export const AuthContext = createContext<any>(null);

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user === null) return;
    const token = JSON.parse(user).token;

    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
      setAuthToken(token);
    }
  }, []);

  // console.log('AuthContext state: ', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
