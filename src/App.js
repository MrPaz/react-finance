import React, { Component } from 'react';

import Navbar from './Navbar';
import Home from './Home';
import SymbolDetails from './SymbolDetails';

class App extends Component {
  constructor(){
    super();
    this.state = {
      matchedSymbols: []
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar matchedSymbols={this.state.matchedSymbols} setMatchedSymbols={this.setMatchedSymbols} />
        {this.state.matchedSymbols.length === 0 ? <Home /> : <div className="container-fluid">
      <div className="row">
        {this.state.matchedSymbols.map(function(e) { return <div className="col-4"><SymbolDetails key={e.symbol} symbol={e} /></div> })}
      </div>
      </div>  
        }
        </div>
    );
  }

  
  setMatchedSymbols = (symbols) => {
    this.setState({matchedSymbols: symbols});
  }

}

export default App;