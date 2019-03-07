import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { exampleAction, loadAllSymbols } from './actions';

class Navbar extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         allSymbols: [],
    //         searchValue: '',
    //     };
    // }

    componentDidMount(){
        if(this.props.allSymbols.length === 0){
            fetch('https://api.iextrading.com/1.0/ref-data/symbols')
            .then(response => response.json()
                .then(data => 
                    this.props.loadAllSymbols(data)
            ))
        }
    }

    searchOnSubmit = async function (e) {
        e.preventDefault();
        var searchValue = document.getElementsByName('search')[0].value.toLowerCase();
        this.props.exampleAction(searchValue);
        // this.props.setMatchedSymbols(searchValue);
        // if(this.state.allSymbols.length === 0){
        //     var response = await fetch('https://api.iextrading.com/1.0/ref-data/symbols');
        //     var data = await response.json();
        //     this.setState({ allSymbols: data });
        // }
        // this.setState({ searchValue: searchValue });
        // if(searchValue !== ''){
        //     var matchedSymbols = this.state.allSymbols.filter(function (e) { return e.symbol.toLowerCase() === searchValue || e.name.toLowerCase().indexOf(searchValue) >= 0 });
        // }
        // else{
        //     matchedSymbols = [];
        // }
        // if(this.props.hasOwnProperty('setMatchedSymbols')){
        //     this.props.setMatchedSymbols(matchedSymbols);
        // }
        // this.props.setMatchedSymbols(matchedSymbols);
        this.props.history.push('/search/' + searchValue);
    }
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <NavLink className="navbar-brand" to="/">React Finance</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="dropdown.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="action.html">Action</a>
                                <a className="dropdown-item" href="action2.html">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="action3.html">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="disabled.html" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0" onSubmit={e => this.searchOnSubmit(e)}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="search" list="symbols" />
                        <datalist id="symbols">
                            {this.props.allSymbols.map(function (e) { return <option key={e.symbol} value={e.symbol}>{e.name}</option> })}
                        </datalist>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>  
        );
    }
}

const mapStateToProps = (state) => {
    return {
     example: state.exampleReducer,
     allSymbols: state.allSymbolReducer
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
        }
    }
}

//Instead of exporting a component, I export a "connected component"
//Each connected component has functions that explain how the component
//interacts with the store
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));