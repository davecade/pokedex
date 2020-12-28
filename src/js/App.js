import { Component, Fragment } from 'react';
import './app.styles.scss'
import { CardList } from './components/card-list/card-list.component';
import { Display } from './components/display/display.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      pokemon: {
        images: [],
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
      let images = []
      let data = []
      for(let i=1; i <= 151; i++) {
        let pokePic = await fetch(`https://pokeres.bastionbot.org/images/pokemon/${i}.png`)
        let pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        let pokeData = await pokeResponse.json();
        images.push(pokePic.url)
        data.push(pokeData.name)
        this.setState( {pokemon: {images: images, stats: data}})
      }
    })();

  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }


  render() {

    const filterPokemon = () => {
      let filteredPokemonImg = []
      let filteredPokemonStat = this.state.pokemon.stats.filter((stat, index) => {
        if(stat.toLowerCase().includes(this.state.searchField.toLowerCase())) {
          filteredPokemonImg.push(this.state.pokemon.images[index])
        }
        
        return stat.toLowerCase().includes(this.state.searchField.toLowerCase())
      })

      return {images: filteredPokemonImg, stats: filteredPokemonStat}
    }


    return (
      <div className="App">
          <Display length={this.state.pokemon.stats.length} title={this.state.title} handleChange={this.handleChange} />
          <CardList pokemon={filterPokemon()}></CardList>
      </div>
    );
  }


}

export default App;
