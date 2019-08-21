import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const rootElement = document.getElementById('root');

let render = () =>{
    ReactDOM.render(<BrowserRouter> <App /></BrowserRouter>,rootElement );
}

render();


