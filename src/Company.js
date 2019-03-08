import React, { Component } from 'react';

import AddToWatchlist from './AddToWatchlist';

class Company extends Component {
    render() {
        return(
	        <div>
                <div className="row">
                    <div className="col space-between">
                        <h1>{this.props.data.companyName}</h1>
                    </div>
                    <div className="col space-between">
                        <AddToWatchlist />
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

export default Company;