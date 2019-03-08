import React, { Component } from 'react';
import Company from './Company';
import News from './News';
import Chart from './Chart';
import Quote from './Quote';
import { NavLink } from 'react-router-dom';

class SymbolDetails extends Component {
    constructor(){
        super();
        this.state = {
            loaded: false
        }
    }

    componentDidMount(){
        if(!this.state.loaded){
            let endpoint = !this.props.showFullDetail ? 'https://api.iextrading.com/1.0/stock/' + this.props.symbol.symbol + '/company' : 'https://api.iextrading.com/1.0/stock/' + this.props.symbol.symbol + '/batch?types=quote,news,chart,company&range=1m&last=10'

            fetch(endpoint)
                .then((response) => {
                    response.json().then((data) => {
                        if(!this.props.showFullDetail){
                            this.setState(state => {return {loaded: true, data: data }});
                        } 
                        else{
                            this.setState(state => {return {loaded: true, data: data.company, quote: data.quote, news: data.news, chart: data.chart }});
                        }   
                    })
                })
        }
    }

    render() {    
        return (
            <div className="m-1 p-4 bg-secondary text-light rounded" >
            {!this.state.loaded ? <progress></progress> : this.props.showFullDetail ? <div>
                <div className="row">
                    <div className="col">
                        <Company data={this.state.data} />
                        <Quote data={this.state.quote} />
                    </div>
                        
                    <div className="col">
                        <News data={this.state.news} />
                    </div>
                    </div>
                    <br></br>
                    <div className="row rounded">
                    <div className="col rounded">
                        <Chart data={this.state.chart} />
                    </div>
                    </div>
                </div> : 
                <div>
                    <Company data={this.state.data} />
                    {/* <a className="btn btn-block btn-primary" href={"/details/" + this.props.symbol.symbol }>{this.props.symbol.name}</a> */}
                    <NavLink className="btn btn-block btn-primary" to={"/details/" + this.props.symbol.symbol }>{this.props.symbol.name}</NavLink>
                </div>
            }
            </div>);
    }
}

export default SymbolDetails;