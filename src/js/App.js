import logo from '../logo.svg';
import '../css/main.css';
import { Component, Fragment } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBar } from './components/search-bar/search-bar.component'
import { LoadingBar } from './components/loading-bar/loading-bar.component'




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

    // -- Runs loading bar if loading is in progress
    const loadingInProgress = () => {
      const LoadngBarEl = document.querySelector('.loading-bar')
      if(LoadngBarEl) {
        let currentLength = this.state.pokemon.stats.length
        let percent = Math.floor((currentLength/151)*100)
        LoadngBarEl.style = `width: ${percent}%`
      }
    }

    // -- Displays loading bar if not all pokemon are loaded
    // -- displays heading and search filters when all 151 pokemon are loaded
    const display = () => {
      if(this.state.pokemon.stats.length < 151) {
        return <LoadingBar />
      } else {
        return (
          <Fragment>
              <h1 className="title">{this.state.title}</h1>
              <SearchBar handleChange={this.handleChange} />
          </Fragment>
        )
      }
    }

    console.log(filteredPokemon)

    return (
      <div className="App">
          {display()}
          {this.state.pokemon.stats.length < 151 ? loadingInProgress() : ''}
          <CardList pokemon={this.state.pokemon}></CardList>
      </div>
    );
  }


}

export default App;
