import React, { Component } from 'react';

class News extends Component {
    render() {
        return (
            <div>
                {this.props.hello && this.props.hello.length > 0 ? 
                    <div>
                        <h2>News</h2>
                        {this.props.hello.map(function(e, i){return <div key={i}>
                        <blockquote>
                            {/* <img src={e.image} /> */}
                            <h3><a href={e.url}>{e.headline}</a></h3>
                            <p>{e.summary}</p>
                            <p>{e.related.split(',').join(', ')}</p>
                            <cite>{e.source} @ {e.datetime}</cite>
                        </blockquote>
                        </div>})}

                    </div> : "" }
            </div>   
        );
    }
}

export default News;