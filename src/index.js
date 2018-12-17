import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import {createStore} from "redux"

const store = createStore((state = [], action) => { 
    let secondState = [...state];
    console.log(secondState)
    switch (action.type){
        case "ADD_TEXT": 
            return [...state,
                    action.payload];
        case "DELETE_TEXT":
            state.splice(state.indexOf(action.payload),1);
            return [...state];
        // case "INCREMENT_COUNTER":

        default:
            return state;
    }
});

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

