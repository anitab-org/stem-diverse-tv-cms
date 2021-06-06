import React from 'react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const auth = useAuth();
  const name = auth.authState?.userInfo?.displayName;

  return <div>WELCOME, {name ? `${name}!` : 'Unknown User!'}</div>;
};

export default Home;
