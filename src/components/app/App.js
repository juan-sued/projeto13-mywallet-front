import '../../css/reset.css';
import '../../css/styles.css';
//import css

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import react

import UserContext from '../../contexts/UserContext';
//import context

import Sign_up_Page from '../Sign_up_Page/Sign-up_Page';
import Login_Page from '../Login/Login_Page';
import Home_Page from '../Home_Page/Home_Page';
import New_Entry_Page from '../New_Entry_Page/New_Entry_Page';
import New_Exit_Page from '../New_Exit_Page/New_Exit_Page';
//import pages

export default function App() {
  const [objLoginResponse, setObjLoginResponse] = useState({});
  //guarda a resposta do login
  const [objHomeResponse, setObjHomeResponse] = useState(null);

  return (
    <UserContext.Provider
      value={{
        objLoginResponse,
        setObjLoginResponse,
        objHomeResponse,
        setObjHomeResponse
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login_Page />} />
          <Route path="/sign-up" element={<Sign_up_Page />} />
          <Route path="/home" element={<Home_Page />} />
          <Route path="/new_entry" element={<New_Entry_Page />} />
          <Route path="/new_exit" element={<New_Exit_Page />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
