import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }  from 'react-router-dom';
import './index.css';
import App from './App';
import AddFolder from './AddFolder/AddFolder';

ReactDOM.render(
  <BrowserRouter>
    <AddFolder />
  </BrowserRouter>,
  document.getElementById('root')
);