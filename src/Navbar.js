import React, { Component } from 'react';

class Navbar extends Component {

    constructor(){
        super();
        this.state = {
            allSymbols: [],
            searchValue: "",
            matchedSymbols: []
        }
    }

    componentDidMount(){
        fetch("https://api.iextrading.com/1.0/ref-data/symbols").then((response) => {
            response.json().then((data) => {
                this.setState( {allSymbols: data});
            })
        })
    }

    searchOnSubmit = function(e) {
        e.preventDefault();
        var searchValue = document.getElementsByName('search')[0].value.toLowerCase();
        this.setState({searchValue: searchValue});
        var matchedSymbols = this.state.allSymbols.filter(function(e) {return e.symbol.toLowerCase === searchValue 
            || e.name.toLowerCase().indexOf(searchValue) >= 0});
        this.setState({matchedSymbols: matchedSymbols });
    }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="navbar.html">React Finance</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="home.html">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="link.html">Link</a>
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
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="search" list="symbols"/>
                    <datalist id="symbols">
                        {this.state.matchedSymbols.map(function(e){return <option key={e.name} value={e.symbol}>{e.name}</option>})}
                    </datalist>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
  }
}

export default Navbar;