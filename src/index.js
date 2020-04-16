
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

//Import Saga Middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import logger from "redux-logger";

//Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

function* rootSaga(){
    yield takeEvery("FETCH_GIF", getGif);
}

function* getGif(action){
    console.log('In getGif');
    try{
        let response = yield axios.get('/api/gif');
        console.log('getGif response', response);
        yield put({
            type: 'SET_GIF',
            payload: response.data
        })
    }catch(error){
      console.log('error in getGif',error);
    }
}

const gifReducer = (state = [], action)=>{
    switch(action.type){
        case 'SET_GIF':
            return action.payload;
            default:
                return state;
    }
}

const store = createStore(
    combineReducers({
        gifReducer,
    }),
    //adding sagaMiddleWare
    applyMiddleware(sagaMiddleware, logger)
)



sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-root")
);
