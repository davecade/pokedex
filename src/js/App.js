import {Component } from 'react';
import './app.styles.scss';
import { CardList } from './components/card-list/card-list.component';
import { Navbar } from './components/navbar/navbar.component';
import { Modal } from './components/modal/modal.component';
import { connect } from 'react-redux'
import { addNewPokemon } from './redux/pokemon/pokemon.actions'
import { searchPokemon } from './redux/search/search.actions'


// -- Beginning of redux implementation
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "Dave's Pokedex",
      clicked: {type: []},
      modalEnabled: false
    }
  }

  componentDidMount() {

    // -- Pokemon Image API: https://pokeres.bastionbot.org/images/pokemon/1.png
    // -- Pokemon Data API: https://pokeapi.co/api/v2/pokemon/1

    const addPokemon = ( async () => {

      const { addNewPokemon } = this.props
      let pokemonObj;

      for(let i=1; i <= 151; i++) {
        // -- Get data from API's
          let pokePic = fetch(`https://pokeres.bastionbot.org/images/pokemon/${i}.png`)
          let pokeResponse = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)  
          let allData = await Promise.all([pokePic, pokeResponse])
          let allDataJsonConverted = await Promise.all([allData[1].json()])
          let pokeData = allDataJsonConverted[0]
          let typeList = []
          for(let i=0; i<pokeData.types.length; i++) typeList.push(pokeData.types[i].type.name)

          pokemonObj = {
            id: i,
            image: allData[0].url,
            name: pokeData.name,
            type: typeList,
            hp: pokeData.stats[0].base_stat,
            height: pokeData.height,
            weight: pokeData.weight,
            attack: pokeData.stats[1].base_stat,
            defense: pokeData.stats[2].base_stat,
            speed: pokeData.stats[5].base_stat,
          }
          addNewPokemon(pokemonObj)
      }

    })();

  }

  handleChange = (e) => {
    const { searchPokemon } = this.props
    searchPokemon(e.target.value)
  }
  
  
  
  

  disableModal = () => this.setState({modalEnabled: false})

  handleClickOnCard = (e) => {
    const { pokemonList } = this.props
    let clickedCard = e.target.closest('.card-content')
    let clickedCardId = clickedCard.getAttribute("id")
    this.setState({clicked: pokemonList[clickedCardId-1], modalEnabled: true})
  }

  
  render() {

    const { pokemonList, searchField } = this.props
    console.log("THE LIST", pokemonList)
    
    const filterPokemon = () => pokemonList.filter( pokemon => 
      pokemon.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <Modal clickedData={this.state.clicked} modalEnabled={this.state.modalEnabled} disableModal={this.disableModal} handleClickOnCard={this.handleClickOnCard} pokemonList={pokemonList}/>
          <div>
            <Navbar pokemonList={filterPokemon()} length={pokemonList.length} title={this.state.title} handleChange={this.handleChange} />
            <CardList handleClickOnCard={this.handleClickOnCard} pokemonList={filterPokemon()}></CardList>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemonList: state.pokemon.pokemonList,
  searchField: state.search.searchField
})

const mapDispatchToProps = dispatch => ({
  addNewPokemon: pokemon => dispatch(addNewPokemon(pokemon)),
  searchPokemon: userInput => dispatch(searchPokemon(userInput))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
