import React from 'react';
import {Login} from '../src/components/molecules/login/Login'
import './App.css';

function App() {
  const data = [
    {
      username: "arun",
      password: "kumar",
    },
    {
      username: "kumar",
      password: "reddy",
    },
  ];
  return (
    <div className="App">
      <Login AccountsData={data} variant='light' />
    </div>
  );
}

export default App;
