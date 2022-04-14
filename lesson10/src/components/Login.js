import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/userSlice';

export default function Login() {
  const [log, setLog] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
    setLog('login successfully!');
  }
  const handleLogout = () => {
    dispatch(logout());
    setLog('logout successfully!');
  }
  return (
    <div>
      {log}
      <br/>
      <button onClick={handleLogin}>Login</button>
      <br/>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
