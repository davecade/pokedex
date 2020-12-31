import { Children, Component, Fragment } from 'react';
import './app.styles.scss';
import { CardList } from './components/card-list/card-list.component';
import { Display } from './components/display/display.component';
import { Modal } from './components/modal/modal.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      pokemon: {
        images: [],
        names: [],
        types: []
      },
      title: "Dave's Pokedex",
      searchField: '',
      clicked: []
    }
  }

  componentDidMount() {

    // -- Pokemon Image API: https://pokeres.bastionbot.org/images/pokemon/1.png
    // -- Pokemon Data API: https://pokeapi.co/api/v2/pokemon/1

    const addPokemon = ( async () => {
      let images = []
      let names = []
      for(let i=1; i <= 151; i++) {
        let pokePic = await fetch(`https://pokeres.bastionbot.org/images/pokemon/${i}.png`)
        let pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        let charResponse = await fetch(`https://pokeapi.co/api/v2/characteristic/6/`)
        let pokeData = await pokeResponse.json();
        let characteristics = await charResponse.json()
        console.log(pokeData)
        images.push(pokePic.url)
        names.push(pokeData.name)
        
        this.setState( {pokemon: {images: images, names: names}})
      }
      
    })();

  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  handleClickOnCard = (e) => {
    let clickedCard = e.target.closest('.card-content')
    let pokemonName = clickedCard.firstChild.innerHTML;
    let pokemonImg = clickedCard.firstChild.nextSibling.src
    console.log(this.state.pokemon.names)
    this.setState({clicked: [pokemonName, pokemonImg]})
  }


  render() {

    const filterPokemon = () => {
      let filteredPokemonImg = []
      let filteredPokemonStat = this.state.pokemon.names.filter((stat, index) => {
        if(stat.toLowerCase().includes(this.state.searchField.toLowerCase())) {
          filteredPokemonImg.push(this.state.pokemon.images[index])
        }
        
        return stat.toLowerCase().includes(this.state.searchField.toLowerCase())
      })

      return {images: filteredPokemonImg, names: filteredPokemonStat}
    }


    return (
      <div className="App">
          <Modal clickedData={this.state.clicked} />
          <Display length={this.state.pokemon.names.length} title={this.state.title} handleChange={this.handleChange} />
          <CardList handleClickOnCard={this.handleClickOnCard} pokemon={filterPokemon()}></CardList>
      </div>
    );
  }


}

export default App;
