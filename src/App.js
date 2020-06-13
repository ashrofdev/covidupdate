import React, { Component } from 'react';
import './App.css'
import Stats from './Components/Stats';
import Countries from './Components/Countries';


class App extends Component {
  state = {
    countryData: {}
  }

  componentDidMount(){
    // fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=US", {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    //     "x-rapidapi-key": "34857597femsh6ed6990c729453fp1fdddcjsn7a5471db02b3"
    //   }
    // })
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(err => {
    //   console.log(err);
    // });

    // //////////////

    // fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=us", {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    //     "x-rapidapi-key": "34857597femsh6ed6990c729453fp1fdddcjsn7a5471db02b3"
    //   }
    // })
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(err => {
    //   console.log(err);
    // });

    /////////// countries

    
  }
 
  getCountryStatus = (country) => {
    fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${country}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "34857597femsh6ed6990c729453fp1fdddcjsn7a5471db02b3"
      }
    })
    .then(res => {
      return res.json()
    }).then(data=>{
      console.log(data)
      this.setState({countryData: data.data})
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
   return (
      <div className="App">
      <h1>COVID UP DATE</h1>
        <div className="content">
          <Countries getCountryStatus={this.getCountryStatus}/>
          <Stats countryData={this.state.countryData}/>
        </div>
         <video autoPlay loop muted>
           <source src={require('./virus.mov')}/>
         </video>
      </div>
    );
  }
}

export default App;
