import { ADD_TO_WATCHLIST } from '../actions';

function watchlistReducer(state = [], action){
    switch(action.type){
        case ADD_TO_WATCHLIST:{
            state.push(action.change);
            return state;
            // return action.symbol;
        }
        default:{
            return state;
        }
    }
}

export default watchlistReducer;