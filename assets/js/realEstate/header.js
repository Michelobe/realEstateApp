import React, { Component} from 'react';


export default class Header extends Component {
// =============================================
    constructor () {
        super();
        this.state = {
            name: 'Michael'
        };
    }
    render () {
        return (
            <header>
                <div className = "logo">
                    Logo
                </div>
                <nav className = "menu">
                    <a href = "#">Create Ads</a>
                    <a href = "#">About Us</a>
                    <a href = "#">Log In</a>
                    <a href = "#" className = "registerBtn">Register</a>
                </nav>
            </header>
        )
    }
// =============================================
}
