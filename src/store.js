import { combineReducers } from 'redux';
import exampleReducer from './reducers/exampleReducer';
// import matchedSymbolReducer from './reducers/matchedSymbolReducer';
import allSymbolReducer from './reducers/allSymbolReducer';
import watchlistReducer from './reducers/watchlistReducer';

//My store is a collection of reducers 
//if I had a simple app, I could just keep all my reducer functions in this file
const store = combineReducers({
    exampleReducer,
    // matchedSymbolReducer,
    allSymbolReducer,
    watchlistReducer
})

export default store