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

      const removeUnwantedArrowText = text => {
        for(let i=0; i<text.length ;i++) {
          if(text[i]==='') {
            text[i] = " "
          }
        }
        return text
      }

      const { addNewPokemon, setLoading } = this.props
      let pokemonObject;

      for(let i=1; i <= 151; i++) {
          // -- Get data from API's
          let pokeDataAPI = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
          let descriptionAPI = fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
          
          //-- Once data is received, convert to json
          let pokeData = await Promise.all([pokeDataAPI, descriptionAPI])
          let pokeDataStats = await pokeData[0].json()
          let pokeDataDescription = await pokeData[1].json()

          // -- add types of each pokemon to an array
          let typeList = []
          for(let i=0; i<pokeDataStats.types.length; i++) typeList.push(pokeDataStats.types[i].type.name)
          
          // -- Get description parts and remove unwanted arrow text
          // -- Then combine description parts into one
          let desciptionPart1 = removeUnwantedArrowText(pokeDataDescription.flavor_text_entries[10].flavor_text.split("")).join("")
          let desciptionPart2 = removeUnwantedArrowText(pokeDataDescription.flavor_text_entries[11].flavor_text.split("")).join("")
          let description = `${desciptionPart1} ${desciptionPart2}`

          // -- Create pokemon object
          pokemonObject = {
            id: i,
            image: `./images/pokemon_${i}.jpg`,
            name: pokeDataStats.name,
            type: typeList,
            description: description,
            hp: pokeDataStats.stats[0].base_stat,
            height: pokeDataStats.height,
            weight: pokeDataStats.weight,
            attack: pokeDataStats.stats[1].base_stat,
            defense: pokeDataStats.stats[2].base_stat,
            speed: pokeDataStats.stats[5].base_stat,
          }

          //-- add pokemon object to pokemon list in REDUX
          addNewPokemon(pokemonObject)
      }

      //-- Loading all pokemon to Object finished, set state to false
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