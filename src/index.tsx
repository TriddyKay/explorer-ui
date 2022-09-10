import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {App} from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/*<Route path="teams" element={<Teams />}>*/}
        {/*  <Route path=":teamId" element={<Team />} />*/}
        {/*  <Route path="new" element={<NewTeamForm />} />*/}
        {/*  <Route index element={<LeagueStandings />} />*/}
        {/*</Route>*/}
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
