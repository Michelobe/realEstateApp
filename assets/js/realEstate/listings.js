import React, { Component} from 'react';


export default class Listings extends Component {
// =============================================
    constructor () {
        super();
        this.state = {
            name: 'Michael'
        };
    }
    render () {
        return (
            <section id = "listings">

                <section className = "searchArea">
                    <input type = "text" name = "search"></input>
                </section>

                <section className = "sortByArea">
                    <div className = "results">
                        390 Results Found
                    </div>
                    <div className = "sortOptions">
                        <select name = "sortBy" className = "sortBy">
                            <option value = "priceAsc">
                                Highest price
                            </option>
                            <option value = "priceAsc">
                                Lowest price
                            </option>
                        </select>
                        <div className = "view">
                            <i className="fas fa-list-ul"></i>
                            <i className="fas fa-th"></i>
                        </div>
                    </div>
                </section>

                <section className = "listingResults">
                    
                    <div className = "listing">
                        <div className = "listingImg">
                            <span className = "address">Montgomery Dr.</span>
                            <div className = "details">
                                <div className = "userImg"></div>
                                <div className = " userDetails">
                                    <span className = "userName">Nina Smith</span>
                                    <span className = "postDate">09/23/2019</span>
                                </div>
                                <div className = "listingDetails">
                                    <div className = "floorspace">
                                        <i className="fas fa-home"></i>
                                        <span> 1000 ft&sup2;</span>
                                    </div>
                                    <div className = "furnishing">
                                        <i className="fas fa-couch"></i>
                                        <span> unfirnished</span>
                                    </div>
                                    <div className = "bedrooms">
                                        <i className="fas fa-bed"></i>
                                        <span> 3 bedrooms</span>
                                    </div>
                                    <div className = "viewBtn">
                                        <a href = "#">View Listings</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "bottomInfo">
                            <span>$1,000 / month (USD)</span>
                            <div className = "bottomLocation">
                                <i className="fas fa-map-marker-alt"></i>
                                <span> Portland, Oregon</span>
                            </div>
                        </div>
                    </div>



                    <div className = "listing">
                        <div className = "listingImg">
                            <span className = "address">Montgomery Dr.</span>
                            <div className = "details">
                                <div className = "userImg"></div>
                                <div className = " userDetails">
                                    <span className = "userName">Nina Smith</span>
                                    <span className = "postDate">09/23/2019</span>
                                </div>
                                <div className = "listingDetails">
                                    <div className = "floorspace">
                                        <i className="fas fa-home"></i>
                                        <span> 1000 ft&sup2;</span>
                                    </div>
                                    <div className = "furnishing">
                                        <i className="fas fa-couch"></i>
                                        <span> unfirnished</span>
                                    </div>
                                    <div className = "bedrooms">
                                        <i className="fas fa-bed"></i>
                                        <span> 3 bedrooms</span>
                                    </div>
                                    <div className = "viewBtn">
                                        <a href = "#">View Listings</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "bottomInfo">
                            <span>$1,000 / month (USD)</span>
                            <div className = "bottomLocation">
                                <i className="fas fa-map-marker-alt"></i>
                                <span> Portland, Oregon</span>
                            </div>
                        </div>
                    </div>



                    <div className = "listing">
                        <div className = "listingImg">
                            <span className = "address">Montgomery Dr.</span>
                            <div className = "details">
                                <div className = "userImg"></div>
                                <div className = " userDetails">
                                    <span className = "userName">Nina Smith</span>
                                    <span className = "postDate">09/23/2019</span>
                                </div>
                                <div className = "listingDetails">
                                    <div className = "floorspace">
                                        <i className="fas fa-home"></i>
                                        <span> 1000 ft&sup2;</span>
                                    </div>
                                    <div className = "furnishing">
                                        <i className="fas fa-couch"></i>
                                        <span> unfirnished</span>
                                    </div>
                                    <div className = "bedrooms">
                                        <i className="fas fa-bed"></i>
                                        <span> 3 bedrooms</span>
                                    </div>
                                    <div className = "viewBtn">
                                        <a href = "#">View Listings</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "bottomInfo">
                            <span>$1,000 / month (USD)</span>
                            <div className = "bottomLocation">
                                <i className="fas fa-map-marker-alt"></i>
                                <span> Portland, Oregon</span>
                            </div>
                        </div>
                    </div>



                    <div className = "listing">
                        <div className = "listingImg">
                            <span className = "address">Montgomery Dr.</span>
                            <div className = "details">
                                <div className = "userImg"></div>
                                <div className = " userDetails">
                                    <span className = "userName">Nina Smith</span>
                                    <span className = "postDate">09/23/2019</span>
                                </div>
                                <div className = "listingDetails">
                                    <div className = "floorspace">
                                        <i className="fas fa-home"></i>
                                        <span> 1000 ft&sup2;</span>
                                    </div>
                                    <div className = "furnishing">
                                        <i className="fas fa-couch"></i>
                                        <span> unfirnished</span>
                                    </div>
                                    <div className = "bedrooms">
                                        <i className="fas fa-bed"></i>
                                        <span> 3 bedrooms</span>
                                    </div>
                                    <div className = "viewBtn">
                                        <a href = "#">View Listings</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "bottomInfo">
                            <span>$1,000 / month (USD)</span>
                            <div className = "bottomLocation">
                                <i className="fas fa-map-marker-alt"></i>
                                <span> Portland, Oregon</span>
                            </div>
                        </div>
                    </div>
                    
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