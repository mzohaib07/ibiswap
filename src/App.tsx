import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import NFT from './components/NFT/NFT';
import NavBar from './components/NavBar/NavBar';
import DrawerWrapper from './components/common/Drawer/DrawerWrapper';
import Stats from './components/Stats/Stats';
import { Context, initialState, Reducer } from './context/Context';

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(Reducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <DrawerWrapper />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/ALL%20NFT' element={<NFT />} />
          <Route path='/stats' element={<Stats />} />

        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
