import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: '',
        gender: '',
        homeworld: '',
        homeworldURL: ''
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
          homeworldURL: body.homeworld
        })
      })
      .then(() => {
        return fetch(`this.state.homeworldURL`)})
      .then(response => response.json())
      .then(body => {
        this.setState({
          homeworld: body.name
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
          homeworldURL: body.homeworld
        })
      })
      .then(fetch(`this.state.homeworldURL`))
      .then(response => response.json())
      .then(body => {
        this.setState({
          homeworld: body.name
        })
      })
    }

  render() {
    let name;
    let gender;
    let homeworld;
    if (this.state.name !== undefined && this.state.gender !== undefined && this.state.homeworld !== undefined) {
      name = this.state.name
      gender = this.state.gender
      homeworld = this.state.homeworld
    } else {
      name = 'Click the button to get a random character!'
    }
    return (
      <div className="background">
        <div className="row">
          <div className="small-12 large-6 small-centered columns text-center main">
            <h1>Star Wars Characters!</h1>
            <h3>{name}</h3>
            <h3>{gender}</h3>
            <h3>{homeworld}</h3>
            <button className="button" onClick={this.handleClick}>Check out a new character!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
