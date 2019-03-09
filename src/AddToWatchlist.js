import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { exampleAction, loadAllSymbols, addToWatchlist } from './actions';

var btnStyle = {
    backgroundColor: "#17a2b8",
    borderColor: "white",
    color: "white",
}
var symbol = this.props.match.params.symbol;

var watchlistButtonText = "Add to Watchlist";
if ( this.props.watchlist.find(function(e){return e.symbol === symbol})){
    watchlistButtonText = "Remove from Watchlist";
}
var handleOnClick = () => {
    this.props.addToWatchlist(symbol);
}

class AddToWatchlist extends Component {
  render() {  
    return (
        <button className="btn btn-outline-success my-2 my-sm-0" style={btnStyle} type="submit" onClick={handleOnClick}>{watchlistButtonText}</button>
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