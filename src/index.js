import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }  from 'react-router-dom';
import './index.css';
import App from './App';
import AddNote from './AddNote/AddNote'


ReactDOM.render(
  <BrowserRouter>
    <AddNote />
  </BrowserRouter>,
  document.getElementById('root')
);