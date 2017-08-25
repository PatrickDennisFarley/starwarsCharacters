import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: '',
        species: ''
      }
    }

    componentDidMount() {
      let randomId = Math.floor(Math.random() * 88) + 1
      fetch(`https://swapi.co/api/people/${randomId}`)
      .then(response => response.json())
      .then(body => {
        this.setState({
          name: body.name,
          species: body.species
        })
      })
    }

  render() {
    let name;
    let species;
    if (this.state.name !== undefined) {
      name = this.state.name
    } else {
      name = 'Click the button to get a random character!'
    }
    return (
      <div className="row">
        <div className="small-12 large-6 small-centered columns text-center main">
          <h1>Star Wars Characters!</h1>
          <h3>{name}</h3>
          <h5>{species}</h5>
          <button className="button" onClick={this.handleClick}>Check out a new character!</button>
        </div>
      </div>
    );
  }
}

export default App;
