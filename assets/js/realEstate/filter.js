import React, { Component} from 'react';


export default class Filter extends Component {
// =================== Class Start===================
    constructor () {
        super();
        this.state = {
            name: 'Michael'
        };
        this.cities = this.cities.bind(this);
        this.homeTypes = this.homeTypes.bind(this);
        this.bedrooms = this.bedrooms.bind(this);
    }
    componentWillMount(){
        this.props.populateAction();
    }
    cities(){
        if(this.props.globalState.populateFormsData.cities != undefined){
            var { cities } = this.props.globalState.populateFormsData;
    
    
            return cities.map((item) => {
                return (
                    <option key = {item} value = {item}>{item}</option>
                )
            });
        }
    }
    homeTypes(){
        
    }
    bedrooms(){
        
    }
    render () {
        return (
            <section id = "filter">
                <div className = "inside">

                    <h4>Filter</h4>


                    <select name = "city" 
                            className = "filters city"
                            onChange = {this.props.change}>
                    <option value = "all">City</option>

                    {this.cities()}

                    </select>
                    <select name = "homeType" 
                            className = "filters homeType"
                            onChange = {this.props.change}>
                        <option value = "all">Home Type</option>
                        <option value = "apartment">Apartment</option>
                        <option value = "condo">Condo</option>
                        <option value = "townHome">Town Home</option>
                        <option value = "room">Room</option>
                    </select>
                    <select name = "bedrooms" 
                            className = "filters bedrooms"
                            onChange = {this.props.change}>
                        <option value = "0">0+ br</option>
                        <option value = "1">1+ br</option>
                        <option value = "2">2+ br</option>
                        <option value = "3">3+ br</option>
                        <option value = "4">4+ br</option>
                    </select>


                    <div className = "filters price">
                        <span className = "title">Price</span>
                        <input type = "text"
                               name = "minPrice"
                               className = "minPrice"
                               onChange = {this.props.change}
                               value = {this.props.globalState.minPrice}></input>
                        
                        <input type = "text"
                               name = "maxPrice"
                               className = "maxPrice"
                               onChange = {this.props.change}
                               value = {this.props.globalState.maxPrice}></input>
                    </div>
                    <div className = "filters floorSpace">
                        <span className = "title">Floor Space</span>
                        <input type = "text"
                               name = "minFloorSpace"
                               className = "minFloorSpace"
                               onChange = {this.props.change}
                               value = {this.props.globalState.minFloorSpace}></input>
                        
                        <input type = "text"
                               name = "maxFloorSpace"
                               className = "maxFloorSpace"
                               onChange = {this.props.change}
                               value = {this.props.globalState.maxFloorSpace}></input>
                    </div>


                    <div className = "filters extras">
                        <span className = "title">Extras</span>
                        <label htmlFor = "elevator">
                            <span>Elevators</span>
                            <input type = "checkbox"
                                   name = "elevator"
                                   value = "elevator"
                                   onChange = {this.props.change}></input>
                        </label>
                    </div>
                    <div className = "filters extras">
                        <label htmlFor = "swimmingPool">
                            <span>Swimming Pool</span>
                            <input type = "checkbox"
                                   name = "swimmingPool"
                                   value = "swimmingPool"
                                   onChange = {this.props.change}></input>
                        </label>
                    </div>
                    <div className = "filters extras">
                        <label htmlFor = "finishedBasement">
                            <span>Finished Basement</span>
                            <input type = "checkbox"
                                   name = "finishedBasement"
                                   value = "finishedBasement"
                                   onChange = {this.props.change}></input>
                        </label>
                    </div>
                    <div className = "filters extras">
                        <label htmlFor = "gym">
                            <span>Gym</span>
                            <input type = "checkbox"
                                   name = "gym"
                                   value = "gym"
                                   onChange = {this.props.change}></input>
                        </label>
                    </div>

                </div>
            </section>
        )
    }
// =================== Class End===================
}
