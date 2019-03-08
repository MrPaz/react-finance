import React, { Component } from 'react';
import SymbolDetails from './SymbolDetails';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

class Search extends Component {
    render() {
        var searchValue = this.props.match.params.term;
        var matchedSymbols = [];
        var exactSymbolFound = false;
        if(searchValue !== ''){
            if(this.props.allSymbols.find(function(e){return e.symbol.toLowerCase() === searchValue})){
                exactSymbolFound = true;
            }
            else{
                matchedSymbols = this.props.allSymbols.filter(function (e) { return e.symbol.toLowerCase() === searchValue || e.name.toLowerCase().indexOf(searchValue) >= 0 }).slice(0, 10);
            }
            
        }
    return (exactSymbolFound ? <Redirect to={"/details/" + searchValue} /> : 
        <div className="container-fluid">
        {matchedSymbols.length > 0 ?
            <div className="row">
            {matchedSymbols.map(function(e) { return <div className="col-4"  key={e.symbol}><SymbolDetails symbol={e} /></div> })}
            </div> : "No Results" 
        }</div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        allSymbols: state.allSymbolReducer 
    }
}

export default connect(mapStateToProps)(withRouter(Search));