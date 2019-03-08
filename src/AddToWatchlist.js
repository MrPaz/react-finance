import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { exampleAction, loadAllSymbols, addToWatchlist } from './actions';

const btnStyle = {
    backgroundColor: "#17a2b8",
    borderColor: "white",
    color: "white",
}

var watchlistButton = "Add to Watchlist";
if ( this.props.history.find(function(e){return e.symbol === this.props.data.symbol})){
    watchlistButton = "Remove from Watchlist";
}

function watchlist (symbol) {
    if ( this.props.history.find(function(e){return e.symbol === this.props.data.symbol})){
        this.props.history.Remove(symbol);
    }
    else{
        this.props.history.push(symbol);
    }
}

class AddToWatchlist extends Component {
  render() {  
    return (
        <button className="btn btn-outline-success my-2 my-sm-0" style={btnStyle} type="submit" onSubmit={watchlist(this.props.data.symbol)}>{watchlistButton}</button>
    );
  }
}

const mapStateToProps = (state) => {
    return {
     watchlist: state.addToWatchlist
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        exampleAction: (change) => {
          dispatch(exampleAction(change))
        },
        // setMatchedSymbols: (symbols) => {
        //     dispatch(setMatchedSymbols(symbols))
        // },
        loadAllSymbols: (symbols) => {
            dispatch(loadAllSymbols(symbols))
        },
        addToWatchlist: (symbol) => {
            dispatch(addToWatchlist(symbol))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddToWatchlist));