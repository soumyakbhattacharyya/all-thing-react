import React, { Component } from 'react';

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { userLoggedIn: false, defaultButtonText: "Log In" }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // given the page is displayed, when the button is clicked, the label of the button changes
        this.setState((prevstate) => {
            if (prevstate.defaultButtonText === "Log In") {
                return { userLoggedIn: true, defaultButtonText: "Log Out" }
            } else {
                return { userLoggedIn: false, defaultButtonText: "Log In" }
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.userLoggedIn ? <h1>User is logged in</h1> : <h1>User is logged out</h1>}
                <button onClick={this.handleClick}>{this.state.defaultButtonText}</button>
            </div>
        );
    }
}

export default LoginComponent;