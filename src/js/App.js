import logo from '../logo.svg';
import '../css/main.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'


// -- Pokemon Image API: https://pokeres.bastionbot.org/images/pokemon/1.png
// -- Pokemon Data API: https://pokeapi.co/api/v2/pokemon/1

class App extends Component {

  constructor() {
    super();

    this.state = {
      pokemons: []
    }
  }

  componentDidMount() {
    const addPokemon = ( async () => {
      let result = []
      for(let i=1; i <= 10; i++) {
        let pokepic = await fetch(`https://pokeres.bastionbot.org/images/pokemon/${i}.png`)
        result.push(pokepic.url)
      }

      this.setState( {pokemons: result})
    })();
}


  render() {
    return (
      <div className="App">
          <h1>Pokedex</h1>
          <CardList pokemons={this.state.pokemons}></CardList>
      </div>
    );
  }


}

export default App;
