import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import { Context, initialState, Reducer } from './context/Context';

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(Reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
