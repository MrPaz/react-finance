import { ADD_TO_WATCHLIST } from '../actions';

function watchlistReducer(state = [], action){
    switch(action.type){
        case ADD_TO_WATCHLIST:{
            if (state.find(function(e){return e.symbol === action.change})){
                state.push(action.change);
            }
            else{
                state.filter(e => e.symbol !== action.change);
            }
            return state;
        }
        default:{
            return state;
        }
    }
}


export default watchlistReducer;