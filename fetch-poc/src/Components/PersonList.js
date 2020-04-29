import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
    state = {
        loading: false,
        persons: []
    }
    componentDidMount() {
        // set loading to true when the app is interacting with API
        this.setState({
            loading: true,
            persons: []
        })
        axios.get('https://swapi.dev/api/people')
            .then(response => response.data.results)
            .then(data => {
                var nameArray = [];
                data.forEach(element => {
                    console.log(element)
                    console.log(element.name)
                    nameArray.push(element.name)
                });
                // at this point the state is updated with an array consisting of list of names
                this.setState({ loading: false, persons: nameArray })
            })
    }
    render() {
        if (this.state.loading) {
            return (
                <div>Loading !!!</div>
            )
        } else {
            return (<div>
                <h1>List of incredible persons</h1>
                <ul>
                    {this.state.persons.map(person => <li key={person}>{person}</li>)}
                </ul>
            </div>);
        }
    }
}

export default PersonList;