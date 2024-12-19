import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/App.css';
import { AuthProvider } from './Contexts/AuthContext';
import { AttendanceProvider } from './Contexts/AttendanceContext';

ReactDOM.render(
  <AuthProvider>
    <AttendanceProvider>
      <App />
    </AttendanceProvider>
  </AuthProvider>,
  document.getElementById('root')
);