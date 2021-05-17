import {Component } from 'react';
import './app.styles.scss';
import CardList from './components/card-list/card-list.component';
import { Navbar } from './components/navbar/navbar.component';
import { Modal } from './components/modal/modal.component';
import { connect } from 'react-redux'
import { addNewPokemon, selectPokemon } from './redux/pokemon/pokemon.actions'
import { searchPokemon } from './redux/search/search.actions'
import { enableModal, disableModal } from './redux/modal/modal.actions'


// -- Beginning of redux implementation
class App extends Component {

  componentDidMount() {

    // -- Pokemon Image API: https://pokeres.bastionbot.org/images/pokemon/1.png
    // -- Pokemon Data API: https://pokeapi.co/api/v2/pokemon/1

    (async () => {

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
  
  disableModal = () => {
    const { disableModal } = this.props
    disableModal()
  }

  handleClickOnCard = (e) => {
    console.log("CLICKED JUST NOW!!")
    const { pokemonList, enableModal, selectPokemon } = this.props
    let clickedCard = e.target.closest('.card-content')
    let clickedCardId = clickedCard.getAttribute("id")
    selectPokemon(pokemonList[clickedCardId-1])
    enableModal()
    
  }

  
  render() {

    const { pokemonList, modalEnabled, selected } = this.props
    
    return (
      <div className="App">
        <Modal clickedData={selected} modalEnabled={modalEnabled} disableModal={this.disableModal} handleClickOnCard={this.handleClickOnCard} pokemonList={pokemonList}/>
          <div>
            <Navbar length={pokemonList.length} handleChange={this.handleChange} />
            <CardList handleClickOnCard={this.handleClickOnCard}></CardList>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemonList: state.pokemon.pokemonList,
  modalEnabled: state.modal.modalEnabled,
  selected: state.pokemon.selected
})

const mapDispatchToProps = dispatch => ({
  addNewPokemon: pokemon => dispatch(addNewPokemon(pokemon)),
  searchPokemon: userInput => dispatch(searchPokemon(userInput)),
  selectPokemon: pokemon => dispatch(selectPokemon(pokemon)),
  enableModal: () => dispatch(enableModal()),
  disableModal: () => dispatch(disableModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);