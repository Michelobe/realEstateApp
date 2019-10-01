import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import Filter from './filter.js';
import Listings from './listings.js';
import listingsData from './data/listingsData.js';


class App extends Component {
// =============================================
    constructor () {
        super();
        this.state = {
            name: 'Michael',
            listingsData: listingsData,
            city: 'all',
            homeType: 'all',
            bedrooms: 0,
            minPrice: 0,
            maxPrice: 10000000,
            minFloorspace: 0,
            maxFloorspace: 50000
        };
    }
    render () {
        console.log(this.state);
        return (
            <div>
                <Header />
                <section id = "contentArea">
                    <Filter />
                    <Listings listingsData = {this.state.listingsData} globalState = {this.state} />
                </section>
            </div>
        )
    }
// =============================================
}




const app = document.getElementById('app');

ReactDOM.render(<App />, app);
