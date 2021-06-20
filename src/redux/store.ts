import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage';
import {composeWithDevTools} from 'redux-devtools-extension';
import pokesReducer from './pokesDucks'
import authReducer from './auth';

const rootReducer = combineReducers({
    pokemones: pokesReducer,
    auth:authReducer
})

const composeEnhancers = compose(
    applyMiddleware(thunk),
    persistState()
);

export default function generateStore() {
    //const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    const store = createStore( rootReducer, composeWithDevTools( compose(applyMiddleware(thunk),persistState())) )
    return store
}