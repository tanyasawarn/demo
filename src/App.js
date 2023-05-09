import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import './App.css';
import Dashboard from './dashboard/dashboard';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
   
      return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element=
          <PrivateRoute>
             <Dashboard/>
          </PrivateRoute>
       />
      </Routes>
    </BrowserRouter>
      );
};

export default App;
 