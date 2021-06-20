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

    const loadImage = async (imageUrl) => {
      let img;
      const imageLoadPromise = new Promise(resolve => {
          img = new Image();
          img.onload = resolve;
          img.src = imageUrl;
      });
  
      await imageLoadPromise;
      return img;
    }

    (async () => {

      const { addNewPokemon, setLoading } = this.props
      let pokemonObject;

      for(let i=1; i <= 151; i++) {
        // -- Get data from API's
          let pokePic = fetch(`https://pokeres.bastionbot.org/images/pokemon/${i}.png`)
          let pokeResponse = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)  
          let allData = await Promise.all([pokePic, pokeResponse])
          let pokeData = await Promise.all([loadImage(allData[0].url), allData[1].json()])
          let typeList = []
          for(let i=0; i<pokeData[1].types.length; i++) typeList.push(pokeData[1].types[i].type.name)
          
          let image = pokeData[0] 
          pokemonObject = {
            id: i,
            image: image.src,
            name: pokeData[1].name,
            type: typeList,
            hp: pokeData[1].stats[0].base_stat,
            height: pokeData[1].height,
            weight: pokeData[1].weight,
            attack: pokeData[1].stats[1].base_stat,
            defense: pokeData[1].stats[2].base_stat,
            speed: pokeData[1].stats[5].base_stat,
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