import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './pokemonReducer';
import thunkMiddleware from 'redux-thunk'



const composeEnhacer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; // esta linea es para conectar don la extension

const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))
); // Esta linea nos permite hacer peticiones a un servidor


export default store;