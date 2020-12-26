import '../css/main.css';
import { Component, Fragment } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { Display } from './components/display/display.component';




class App extends Component {

  constructor() {
    super();

    this.state = {
      pokemon: {
        pics: [],
        stats: []
      },
      title: "Dave's Pokedex",
      searchField: ''
    }
  }

  componentDidMount() {

    // -- Pokemon Image API: https://pokeres.bastionbot.org/images/pokemon/1.png
    // -- Pokemon Data API: https://pokeapi.co/api/v2/pokemon/1

    const addPokemon = ( async () => {
      let pictures = []
      let data = []
      for(let i=1; i <= 151; i++) {
        let pokePic = await fetch(`https://pokeres.bastionbot.org/images/pokemon/${i}.png`)
        let pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        let pokeData = await pokeResponse.json();
        pictures.push(pokePic.url)
        data.push(pokeData.name)
        this.setState( {pokemon: {pics: pictures, stats: data}})
      }
    })();

  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value}, () => console.log(this.state.searchField))
  }


  render() {
    const filteredPokemon = this.state.pokemon.stats.filter((stat, index) => {
      return stat.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    console.log(filteredPokemon)

    return (
      <div className="App">
          <Display length={this.state.pokemon.stats.length} title={this.state.title} handleChange={this.handleChange} />
          <CardList pokemon={this.state.pokemon}></CardList>
      </div>
    );
  }


}

export default App;
