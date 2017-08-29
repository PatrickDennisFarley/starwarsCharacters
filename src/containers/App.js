import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: '',
        gender: '',
        homeworld: '',
        homeworldURL: '',
        speciesURL: '',
        species: ''
      }
      this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
      let randomId = Math.floor(Math.random() * 87) + 1
      fetch(`https://swapi.co/api/people/${randomId}`)
      .then(response => response.json())
      .then(body => {
        this.setState({
          name: body.name,
          gender: body.gender,
          homeworldURL: body.homeworld,
          speciesURL: body.species
        })
      })
      .then(() => {
        return fetch(`${this.state.homeworldURL}`)})
      .then(response => response.json())
      .then(body => {
        this.setState({
          homeworld: body.name
        })
      })
      .then(() => {
        return fetch(`${this.state.speciesURL}`)})
      .then(response => response.json())
      .then(body => {
        this.setState({
          species: body.name
        })
      })
    }

    handleClick(event) {
      let randomId = Math.floor(Math.random() * 87) + 1
      fetch(`https://swapi.co/api/people/${randomId}`)
      .then(response => response.json())
      .then(body => {
        this.setState({
          name: body.name,
          gender: body.gender,
          homeworldURL: body.homeworld,
          speciesURL: body.species
        })
      })
      .then(() => {
        return fetch(`${this.state.homeworldURL}`)})
      .then(response => response.json())
      .then(body => {
        this.setState({
          homeworld: body.name
        })
      })
      .then(() => {
        return fetch(`${this.state.speciesURL}`)})
      .then(response => response.json())
      .then(body => {
        this.setState({
          species: body.name
        })
      })
    }

  render() {
    let name;
    let gender;
    let homeworld;
    let species;
    if (this.state.name !== undefined && this.state.gender !== undefined && this.state.homeworld !== undefined && this.state.species !== undefined) {
      name = this.state.name
      gender = this.state.gender
      homeworld = this.state.homeworld
      species = this.state.species
    } else {
      name = 'Click the button to get a random character!'
    }
    return (
      <div className="background">
        <div className="row">
          <div className="small-12 large-6 small-centered columns text-center main">
            <h1>Star Wars Characters!</h1>
            <h3>Name: {name}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Homeworld: {homeworld}</h3>
            <h3>Species: {species}</h3>
            <button className="button" onClick={this.handleClick}>Check out a new character!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
