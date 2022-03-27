import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import { Context, initialState, Reducer } from './context/Context';
import NFT from './components/NFT/NFT';
import NavBar from './components/NavBar/NavBar';

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(Reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/ALL%20NFT' element={<NFT />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
