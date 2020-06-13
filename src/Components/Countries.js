import React, { Component } from 'react';

class Countries extends Component {
    state = {
        countries: []
    }
    componentDidMount() {
        fetch("https://restcountries-v1.p.rapidapi.com/all", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
                "x-rapidapi-key": "34857597femsh6ed6990c729453fp1fdddcjsn7a5471db02b3"
            }
        })
        .then(res => {
            return res.json()
        }).then(data=>{

            this.setState({countries: data})
            console.log(this.state.countries);
        })
        .catch(err => {
        console.log(err);
        });
    }

    render() {
        const  { getCountryStatus } = this.props
        return (
            <div className="countries">
                <h2>Select a country</h2>    

                {
                    this.state.countries.map(e=>{
                        return <div className="country">
                            <button className="btn" onClick={()=>getCountryStatus(e.name)}>{e.name}</button>
                            <div className="country_details">
                                <p>Native name: {e.nativeName}</p>
                                <p>Population {e.population}</p>
                                <p>Capital: {e.capital}</p>
                                <p>Region: {e.region}</p>
                                <p>Subregion: {e.subregion}</p>
                            </div>
                        </div>
                    })
                }
                
                <div className="country">
                    <button className="btn">Nigjdn jeneria</button>
                    <div className="country_details">details</div>
                </div>
            </div>
        );
    }
}

export default Countries;