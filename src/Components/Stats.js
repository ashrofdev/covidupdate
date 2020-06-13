import React, { Component } from 'react';

class Stats extends Component {
    render() {
        const {countryData} = this.props
        return (
            <div className="stats">
                <h1 className="total">{countryData.confirmed} <span>in total</span></h1>
                <h1 className="death">{countryData.deaths} <span>deaths</span></h1>
                <h1 className="release">{countryData.recovered} <span>recoveries</span></h1>
            </div>
        );
    }
}

export default Stats;