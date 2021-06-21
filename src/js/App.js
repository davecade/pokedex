import { Component } from 'react';
import './app.styles.scss';
import CardList from './components/card-list/card-list.component';
import Navbar from './components/navbar/navbar.component';
import Modal from './components/modal/modal.component';
import { connect } from 'react-redux'
import { addNewPokemon, setLoading } from './redux/pokemon/pokemon.actions'



class App extends Component {

  componentDidMount() {

    // -- Pokemon Image API: https://pokeres.bastionbot.org/images/pokemon/1.png
    // -- Pokemon Data API: https://pokeapi.co/api/v2/pokemon/1

    (async () => {

      const { addNewPokemon, setLoading } = this.props
      let pokemonObject;

      for(let i=1; i <= 151; i++) {
        // -- Get data from API's
          let pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)  
          let pokeData = await pokeResponse.json()
          let typeList = []
          for(let i=0; i<pokeData.types.length; i++) typeList.push(pokeData.types[i].type.name)
          
          pokemonObject = {
            id: i,
            image: `./images/pokemon_${i}.jpg`,
            name: pokeData.name,
            type: typeList,
            hp: pokeData.stats[0].base_stat,
            height: pokeData.height,
            weight: pokeData.weight,
            attack: pokeData.stats[1].base_stat,
            defense: pokeData.stats[2].base_stat,
            speed: pokeData.stats[5].base_stat,
          }
          addNewPokemon(pokemonObject)
      }

      setLoading(false)

    })();

  }

  // -- Redux for state management - No props needs to be sent
  render() {
    return (
      <div className="App">
        <Modal/>
          <div>
            <Navbar/>
            <CardList/>
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNewPokemon: pokemon => dispatch(addNewPokemon(pokemon)),
  setLoading: status => dispatch(setLoading(status))

})

export default connect(null, mapDispatchToProps)(App);