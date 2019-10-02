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
            bedrooms: 1,
            minPrice: 0,
            maxPrice: 10000000,
            minFloorSpace: 0,
            maxFloorSpace: 50000,
            elevator: false,
            swimmingPool: false,
            finishedBasement: false,
            gym: false,
            filteredData: listingsData
        };
        this.change = this.change.bind(this);
        this.filteredData = this.filteredData.bind(this);
    }
    change(event){
        var name = event.target.name;
        var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
        this.setState({
            [name]: value
        },() => {
            console.log(this.state);
        });

    }
    filteredData(){
        
    }
    render () {
        return (
            <div>
                <Header />
                <section id = "contentArea">
                    <Filter change = {this.change} globalState = {this.state} />
                    <Listings listingsData = {this.state.filteredData} />
                </section>
            </div>
        )
    }
// =============================================
}




const app = document.getElementById('app');

ReactDOM.render(<App />, app);
