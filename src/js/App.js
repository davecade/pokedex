import {Component } from 'react';
import './app.styles.scss';
import { CardList } from './components/card-list/card-list.component';
import { Display } from './components/display/display.component';
import { Modal } from './components/modal/modal.component';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemonList: [],
      title: "Dave's Pokedex",
      searchField: '',
      clicked: {},
      modalEnabled: false
    }
  }

  componentDidMount() {

    // -- Pokemon Image API: https://pokeres.bastionbot.org/images/pokemon/1.png
    // -- Pokemon Data API: https://pokeapi.co/api/v2/pokemon/1
    // -- Pokemon Evolution Data API: https://pokeapi.co/api/v2/evolution-chain/1

    const addPokemon = ( async () => {
      let evolveChain = []

      for(let i=1; i <= 151; i++) {
          let pokePic = fetch(`https://pokeres.bastionbot.org/images/pokemon/${i}.png`)
          let pokeResponse = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
          let pokeEvolution = fetch(`https://pokeapi.co/api/v2/evolution-chain/${i}`)    
          let allData = await Promise.all([pokePic, pokeResponse, pokeEvolution])
          let allDataJsonConverted = await Promise.all([allData[1].json(), allData[2].json()])
          let pokeData = allDataJsonConverted[0]
          let pokeEvolutionData = allDataJsonConverted[1]
          let pokemonObj;

          if(i < 79) {
            evolveChain.push(pokeEvolutionData.chain)
          }
          
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

          this.setState( {pokemonList: [...this.state.pokemonList, pokemonObj]})
      }

    })();

  }

  handleChange = (e) => this.setState({searchField: e.target.value})

  disableModal = () => this.setState({modalEnabled: false})

  handleClickOnCard = (e) => {
    let clickedCard = e.target.closest('.card-content')
    let clickedCardId = clickedCard.getAttribute("id")
    this.setState({clicked: this.state.pokemonList[clickedCardId-1], modalEnabled: true})
  }


  render() {
    const filterPokemon = () => this.state.pokemonList.filter((pokemon, index) => 
      pokemon.name.toLowerCase().includes(this.state.searchField.toLowerCase()))

    return (
      <div className="App">


        <Modal clickedData={this.state.clicked} modalEnabled={this.state.modalEnabled} disableModal={this.disableModal} />
          <layer>
            <Display length={this.state.pokemonList.length} title={this.state.title} handleChange={this.handleChange} />
            <CardList handleClickOnCard={this.handleClickOnCard} pokemonList={filterPokemon()}></CardList>
          </layer>
      </div>
    );
  }


}

export default App;
