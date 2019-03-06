import React, { Component } from 'react';

class Quote extends Component {
    render() {
        return (
            <div className="bg-light text-dark rounded">
                <div className="row">
                    <div className="col">
                        <div className="p-5">
                        <h2>${this.props.data.latestPrice}</h2>
                        <p><em>last updated {this.props.data.latestTime}</em></p>
                        </div>
                    </div>
                    <div className="col p-2">
                        <dl>
                            {/* <dt>Open</dt> */}
                            <dd><strong>Open:   </strong>${this.props.data.open}</dd>
                            {/* <dt>High</dt> */}
                            <dd><strong>High:   </strong>${this.props.data.high}</dd>
                            {/* <dt>Low</dt> */}
                            <dd><strong>Low:   </strong>${this.props.data.low}</dd>
                            {/* <dt>52-Week High</dt> */}
                            <dd><strong>52-Week High:   </strong>${this.props.data.week52High}</dd>
                            {/* <dt>52-Week Low</dt> */}
                            <dd><strong>52-Week Low:   </strong>${this.props.data.week52Low}</dd>
                        </dl>
                    </div>   
                </div>
            </div>
        );
    } 
}

export default Quote;