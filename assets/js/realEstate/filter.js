import React, { Component} from 'react';


export default class Filter extends Component {
// =================== Class Start===================
    constructor () {
        super();
        this.state = {
            name: 'Michael'
        };
    }
    render () {
        return (
            <section id = "filter">
                <div className = "inside">

                    <h4>Filter</h4>


                    <select name = "filters city" 
                            className = "city">
                        <option value = "all">All</option>
                        <option value = "Portland">Portland</option>
                        <option value = "Vancouver">Vancouver</option>
                        <option value = "Gresham">Gresham</option>
                        <option value = "Orange">Orange</option>
                        <option value = "Anaheim">Anaheim</option>
                        <option value = "Newport">Newport</option>
                    </select>
                    <select name = "filters houseType" 
                            className = "houseType">
                        <option value = "all">All</option>
                        <option value = "apartment">Apartment</option>
                        <option value = "condo">Condo</option>
                        <option value = "townHome">Town Home</option>
                        <option value = "Room">Room</option>
                    </select>
                    <select name = "filters bedrooms" 
                            className = "bedrooms">
                        <option value = "0">All</option>
                        <option value = "1">1+ br</option>
                        <option value = "2">2+ br</option>
                        <option value = "3">3+ br</option>
                    </select>


                    <div className = "filters price">
                        <span className = "title">Price</span>
                        <input type = "text"
                            name = "minPrice"
                            className = "minPrice"></input>
                        
                        <input type = "text"
                            name = "maxPrice"
                            className = "maxPrice"></input>
                    </div>
                    <div className = "filters floorSpace">
                        <span className = "title">Floor Space</span>
                        <input type = "text"
                            name = "minFloorSpace"
                            className = "minFloorSpace"></input>
                        
                        <input type = "text"
                            name = "maxFloorSpace"
                            className = "maxFloorSpace"></input>
                    </div>


                    <div className = "filters extras">
                        <span className = "title">Extras</span>
                        <label htmlFor = "extras">
                            <span>Elevators</span>
                            <input type = "checkbox"
                                name = "extras"
                                value = "elevator"></input>
                        </label>
                    </div>
                    <div className = "filters extras">
                        <label htmlFor = "extras">
                            <span>Swimming Pool</span>
                            <input type = "checkbox"
                                name = "extras"
                                value = "swimming pool"></input>
                        </label>
                    </div>
                    <div className = "filters extras">
                        <label htmlFor = "extras">
                            <span>Finished Basement</span>
                            <input type = "checkbox"
                                name = "extras"
                                value = "swimming pool"></input>
                        </label>
                    </div>
                    <div className = "filters extras">
                        <label htmlFor = "extras">
                            <span>Gym</span>
                            <input type = "checkbox"
                                name = "extras"
                                value = "gym"></input>
                        </label>
                    </div>

                </div>
            </section>
        )
    }
// =================== Class End===================
}
