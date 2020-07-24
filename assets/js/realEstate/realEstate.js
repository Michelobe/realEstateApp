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
            populateFormsData: [],
            sortBy: 'priceDsc',
            view: 'boxGrid',
            search: ''
        };
        this.change = this.change.bind(this);
        this.filteredData = this.filteredData.bind(this);
        this.populateForms = this.populateForms.bind(this);
        this.changeView = this.changeView.bind(this);
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



    changeView(viewName){
        this.setState({
            view: viewName
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

        if(this.state.sortBy == 'priceDsc'){
            newData = newData.sort((a,b) => {
                return (b.price - a.price);
            });
        }
        if(this.state.sortBy == 'priceAsc'){
            newData = newData.sort((a,b) => {
                return (a.price - b.price);
            });
        }

        if(this.state.search != ''){
            newData = newData.filter((item) => {
                var city = item.city.toLowerCase();
                var searchText = this.state.search.toLowerCase();
                var n = city.match(searchText);

                if(n != null){
                    return true;
                }
            });
        }

        if(this.state.elevator == true){
            newData = newData.filter((item) => {
                return item.elevator == true;
            });
        }

        if(this.state.swimmingPool == true){
            newData = newData.filter((item) => {
                return item.swimmingPool == true;
            });
        }
        if(this.state.finishedBasement == true){
            newData = newData.filter((item) => {
                return item.finishedBasement == true;
            });
        }
        if(this.state.gym == true){
            newData = newData.filter((item) => {
                return item.gym == true;
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
        cities = cities.sort();

        //homeType
        var homeTypes = this.state.listingsData.map((item) => {
            return item.homeType;
        });
        homeTypes = new Set(homeTypes);
        homeTypes = [...homeTypes];
        homeTypes = homeTypes.sort();

        //bedrooms
        var bedrooms = this.state.listingsData.map((item) => {
            return item.bedrooms;
        });
        bedrooms = new Set(bedrooms);
        bedrooms = [...bedrooms];
        bedrooms = bedrooms.sort();

        this.setState({
            populateFormsData: {
                cities,
                homeTypes,
                bedrooms
            }
        });
    }



    componentWillMount(){
        var listingsData = this.state.listingsData.sort((a, b) => {
            return (a.price - b.price);
        });

        this.setState({
            listingsData
        })
    }



    render () {
        return (
            <div>
                <Header />
                <section id = "contentArea">
                    <Filter change = {this.change} 
                            globalState = {this.state} 
                            populateAction = {this.populateForms} />
                    <Listings change = {this.change} 
                              listingsData = {this.state.filteredData}
                              globalState = {this.state} 
                              changeView = {this.changeView} />
                </section>
            </div>
        )
    }
// =============================================
}




const app = document.getElementById('app');

ReactDOM.render(<App />, app);
