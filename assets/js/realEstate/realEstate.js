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
            minFloorSpace: 0,
            maxFloorSpace: 50000,
            elevator: false,
            swimmingPool: false,
            finishedBasement: false,
            gym: false,
            filteredData: listingsData,
            populateFormsData: []
        };
        this.change = this.change.bind(this);
        this.filteredData = this.filteredData.bind(this);
        this.populateForms = this.populateForms.bind(this);
    }
    change(event){
        var name = event.target.name;
        var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
        this.setState({
            [name]: value
        },() => {
            console.log(this.state);
            this.filteredData();
        });

    }
    filteredData(){
        var newData = this.state.listingsData.filter((item) => {
            return item.price >= this.state.minPrice &&
                   item.price <= this.state.maxPrice &&
                   item.floorspace >= this.state.minFloorSpace &&
                   item.floorspace <= this.state.maxFloorSpace &&
                   item.bedrooms >= this.state.bedrooms;
        });
        if(this.state.city != 'all'){
            newData = newData.filter((item) => {
                return item.city == this.state.city;
            });
        }
        if(this.state.homeType != 'all'){
            newData = newData.filter((item) => {
                return item.homeType == this.state.homeType;
            });
        }

        this.setState({
            filteredData : newData
        });
    }
    populateForms(){
        //city
        var cities = this.state.listingsData.map((item) => {
            return item.city;
        });
        cities = new Set(cities);
        cities = [...cities];

        //homeType
        var homeTypes = this.state.listingsData.map((item) => {
            return item.homeType;
        });
        homeTypes = new Set(homeTypes);
        homeTypes = [...homeTypes];

        //bedrooms
        var bedrooms = this.state.listingsData.map((item) => {
            return item.bedrooms;
        });
        bedrooms = new Set(bedrooms);
        bedrooms = [...bedrooms];

        this.setState({
            populateFormsData: {
                cities,
                homeTypes,
                bedrooms
            }
        });
    }
    render () {
        return (
            <div>
                <Header />
                <section id = "contentArea">
                    <Filter change = {this.change} globalState = {this.state} populateAction = {this.populateForms} />
                    <Listings listingsData = {this.state.filteredData} />
                </section>
            </div>
        )
    }
// =============================================
}




const app = document.getElementById('app');

ReactDOM.render(<App />, app);
