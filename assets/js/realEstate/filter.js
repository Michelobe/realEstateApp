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
        if(this.props.globalState.populateFormsData.homeTypes != undefined){
            var { homeTypes } = this.props.globalState.populateFormsData;
    
    
            return homeTypes.map((item) => {
                return (
                    <option key = {item} value = {item}>{item}</option>
                )
            });
        }
    }
    bedrooms(){
        if(this.props.globalState.populateFormsData.bedrooms != undefined){
            var { bedrooms } = this.props.globalState.populateFormsData;
    
    
            return bedrooms.map((item) => {
                return (
                    <option key = {item} value = {item}>{item}+ br</option>
                )
            });
        }
    }
    render () {
        return (
            <section id = "filter">
                <div className = "inside">

                    <h4>Filter</h4>

                    <label htmlFor = "city">City</label>
                    <select name = "city" 
                            className = "filters city"
                            onChange = {this.props.change}>
                        <option value = "all">City</option>
                        {this.cities()}
                    </select>
                    <label htmlFor = "homeType">Home Type</label>
                    <select name = "homeType" 
                            className = "filters homeType"
                            onChange = {this.props.change}>
                        <option value = "all">Home Type</option>
                        {this.homeTypes()}
                    </select>
                    <label htmlFor = "bedrooms">Bedrooms</label>
                    <select name = "bedrooms" 
                            className = "filters bedrooms"
                            onChange = {this.props.change}>
                        <option value = "0">Any</option>
                        {this.bedrooms()}
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
