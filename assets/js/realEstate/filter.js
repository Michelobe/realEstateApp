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


                    <select name = "filters neighborhood" 
                            className = "neighborhood">
                        <option>Ridgewood</option>
                    </select>
                    <select name = "filters houseType" 
                            className = "houseType">
                        <option>Ranch</option>
                    </select>
                    <select name = "filters bedrooms" 
                            className = "bedrooms">
                        <option>2 br</option>
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
