import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import {createStore} from "redux"

const initialState = {
    data:[],
    counter: 0
    }

const store = createStore((state = initialState, action) => { 
    switch (action.type){
        case "ADD_TEXT": 
            return {
                data:[...state.data, action.payload],
            };
        case "DELETE_TEXT":
            state.data.splice(state.data.indexOf(action.payload),1);
            return {
                data:[...state.data]
            };
        case "COUNTER":
        
            return {
                data:[...state.data],
                counter:action.payload,
            }
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

