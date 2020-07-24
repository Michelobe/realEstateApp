import React, { Component} from 'react';


export default class Listings extends Component {
// =============================================
    constructor () {
        super();
        this.state = {
            name: 'Michael'
        };
        this.loopListings = this.loopListings.bind(this);
    }
    loopListings(){
        var { listingsData } = this.props;

        if(listingsData == undefined || listingsData.length == 0){
            return "Sorry, your filter did not match any listing";
        }

        return listingsData.map((listing, index) => {

            if(this.props.globalState.view == 'boxGrid'){
                // THIS IS THE LISTINGS   BOXGRID VIEW
                return (
                    <div className = "listing boxGrid" key = {index}>
                        <div className = "listingImg"
                            style = {{background: `url("${listing.img}") no-repeat center center`,
                                    backgroundSize: `cover`}}>
                            <span className = "address">{listing.address}</span>
                            <div className = "details">
                                <div className = "userImg"></div>
                                <div className = " userDetails">
                                    <span className = "userName">Nina Smith</span>
                                    <span className = "postDate">09/23/2019</span>
                                </div>
                                <div className = "listingDetails">
                                    <div className = "floorspace">
                                        <i className="fas fa-home"></i>
                                        <span> {listing.floorspace} ft&sup2;</span>
                                    </div>
                                    <div className = "furnishing">
                                        <i className="fas fa-couch"></i>
                                        <span> {listing.furnished}</span>
                                    </div>
                                    <div className = "bedrooms">
                                        <i className="fas fa-bed"></i>
                                        <span> {listing.bedrooms} bedrooms</span>
                                    </div>
                                    <div className = "viewBtn">
                                        <a href = "#">View Listings</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "bottomInfo">
                            <span>${listing.price} (USD)</span>
                            <div className = "bottomLocation">
                                <i className="fas fa-map-marker-alt"></i>
                                <span> {listing.city}, {listing.state}</span>
                            </div>
                        </div>
                    </div>
                );
            } else{
                // THIS IS THE LISTINGS   ROW VIEW
                return (
                    <div className = "listing rowGrid" key = {index}>
                        <div className = "listingImg"
                             style = {{background: `url("${listing.img}") no-repeat center center`,
                                       backgroundSize: `cover`}}>
                            <span className = "address">{listing.address}</span>
                            <div className = "details">
                                <div className = "userImg"></div>
                                <div className = " userDetails">
                                    <span className = "userName">Nina Smith</span>
                                    <span className = "postDate">09/23/2019</span>
                                </div>
                                <div className = "listingDetails">
                                    <div className = "floorspace">
                                        <i className="fas fa-home"></i>
                                        <span> {listing.floorspace} ft&sup2;</span>
                                    </div>
                                    <div className = "furnishing">
                                        <i className="fas fa-couch"></i>
                                        <span> {listing.furnished}</span>
                                    </div>
                                    <div className = "bedrooms">
                                        <i className="fas fa-bed"></i>
                                        <span> {listing.bedrooms} bedrooms</span>
                                    </div>
                                    <div className = "viewBtn">
                                        <a href = "#">View Listings</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "bottomInfo">
                            <span>${listing.price} (USD)</span>
                            <div className = "bottomLocation">
                                <i className="fas fa-map-marker-alt"></i>
                                <span> {listing.city}, {listing.state}</span>
                            </div>
                        </div>
                    </div>
                );
            }
        });
    }
    render () {
        return (
            <section id = "listings">

                <section className = "searchArea">
                    <input type = "text" 
                           name = "search"
                           onChange = {this.props.change}></input>
                </section>

                <section className = "sortByArea">
                    <div className = "results">
                        {this.props.globalState.filteredData.length} Results Found
                    </div>
                    <div className = "sortOptions">
                        <select name = "sortBy" 
                                className = "sortBy"
                                onChange = {this.props.change}>
                            <option value = "priceAsc">
                                Price(Lowest to Highest)
                            </option>
                            <option value = "priceDsc">
                                Price(Highest to Lowest)
                            </option>
                        </select>
                        <div className = "view">
                            <i className="fas fa-list-ul"
                               onClick = {this.props.changeView.bind(null, "rowGrid")}></i>
                            <i className="fas fa-th"
                               onClick = {this.props.changeView.bind(null, "boxGrid")}></i>
                        </div>
                    </div>
                </section>

                <section className = "listingResults">

                {this.loopListings()}
                    
                </section>
                
                <section className = "pagination">
                    <ul className = "pages">
                        <li className = "prevBtn">Prev</li>
                        <li className = "pageNumber active">1</li>
                        <li className = "pageNumber">2</li>
                        <li className = "pageNumber">3</li>
                        <li className = "pageNumber">4</li>
                        <li className = "pageNumber">...</li>
                        <li className = "pageNumber">30</li>
                        <li className = "nextBtn">Next</li>
                    </ul>
                </section>

            </section>
        )
    }
// =============================================
}