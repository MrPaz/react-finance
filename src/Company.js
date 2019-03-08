import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
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

class Company extends Component {
    render() {
        return(
	        <div>
                <div className="row">
                    <div className="col space-between">
                        <h1>{this.props.data.companyName}</h1>
                    </div>
                    <div className="col space-between">
                        <button className="btn btn-outline-success my-2 my-sm-0" style={btnStyle} type="submit" onSubmit={watchlist(this.props.data.symbol)}>{watchlistButton}</button>
                    </div>
                </div>
                <p>{this.props.data.description}</p>
                <dl>
                    <dt>Industry</dt>
                    <dd>{this.props.data.industry}</dd>
                    <dt>Sector</dt>
                    <dd>{this.props.data.sector}</dd>
                    <dt>CEO</dt>
                    <dd>{this.props.data.CEO}</dd>
                    <dt>Exchange</dt>
                    <dd>{this.props.data.exchange}</dd>
                </dl>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Company));