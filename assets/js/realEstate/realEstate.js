import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import Filter from './filter.js';
import Listings from './listings.js';


class App extends Component {
// =============================================
    constructor () {
        super();
        this.state = {
            name: 'Michael'
        };
    }
    render () {
        return (
            <div>
                <Header />
                <section id = "contentArea">
                    <Filter />
                    <Listings />
                </section>
            </div>
        )
    }
// =============================================
}




const app = document.getElementById('app');

ReactDOM.render(<App />, app);
