import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import ScrollToTop from './util/ScrollToTop';

const rootElement = document.getElementById('root');
const store = configureStore();
let render = () =>{
    ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter> 
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </BrowserRouter>
    </Provider>,
    rootElement );
}

render();


