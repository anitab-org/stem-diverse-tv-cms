import React, { createContext, ReactNode, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

interface Context {
  authState: InitialAuthState;
  setAuthState: (authInfo: AuthInfo) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

interface UserInfo {
  displayName: string;
  email: string;
}

interface AuthInfo {
  token: string;
  userInfo: UserInfo;
  expiresIn: string;
}

interface InitialAuthState {
  token: string | null;
  userInfo: UserInfo | null;
  expiresIn: string | number | null;
}

const AuthContext = createContext<Context | undefined>(undefined!);
const { Provider } = AuthContext;

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const history = useHistory();

  const token = localStorage.getItem('token');
  const userInfo = localStorage.getItem('userInfo');
  const expiresIn = localStorage.getItem('expiresIn');

  const [authState, setAuthState] = useState<InitialAuthState>({
    token,
    expiresIn,
    userInfo: userInfo ? JSON.parse(userInfo) : {},
  });
  // eslint-disable-next-line
  const setAuthInfo = ({ token, userInfo, expiresIn }: AuthInfo) => {
    if (token && expiresIn && userInfo) {
      localStorage.setItem('token', token);
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      localStorage.setItem('expiresIn', expiresIn);

      setAuthState({
        token,
        userInfo,
        expiresIn,
      });
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('expiresIn');
    setAuthState({
      token: null,
      expiresIn: null,
      userInfo: null,
    });
    history.push('/login');
  };

  const isAuthenticated = () => {
    if (authState.token && authState.expiresIn) {
      return true;
    }
    return false;
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState: (authInfo: AuthInfo) => setAuthInfo(authInfo),
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};

const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth?.authState) {
    throw new Error('Auth context was used outside of the provider tree.');
  }
  return auth;
};

export { useAuth, AuthProvider };
