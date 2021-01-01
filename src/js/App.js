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
        types: [],
        heights: [],
        weights: [],
        hps: [],
        attacks: [],
        defenses: [],
        speeds: []
      },
      title: "Dave's Pokedex",
      searchField: '',
      clicked: {
        image: '',
        name: '',
        type: '',
        height: '',
        weight: '',
        hp: '',
        attack: '',
        defense: '',
        speed: ''
      },
      canClick: true
    }
  }

  componentDidMount() {

    // -- Pokemon Image API: https://pokeres.bastionbot.org/images/pokemon/1.png
    // -- Pokemon Data API: https://pokeapi.co/api/v2/pokemon/1

    const addPokemon = ( async () => {
      let images = []
      let names = []
      let types = []
      let hps = []
      let heights = []
      let weights = []
      let attacks = []
      let defenses = []
      let speeds = []

      for(let i=1; i <= 151; i++) {
        let pokePic = await fetch(`https://pokeres.bastionbot.org/images/pokemon/${i}.png`)
        let pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        let pokeData = await pokeResponse.json();
        let typeList = []

        
        for(let i=0; i<pokeData.types.length; i++) typeList.push(pokeData.types[i].type.name)
        types.push(typeList)
        images.push(pokePic.url)
        names.push(pokeData.name)
        hps.push(pokeData.stats[0].base_stat)
        attacks.push(pokeData.stats[1].base_stat)
        defenses.push(pokeData.stats[2].base_stat)
        speeds.push(pokeData.stats[5].base_stat)
        heights.push(pokeData.height)
        weights.push(pokeData.weight)
        this.setState( {pokemon: {images, names, types, hps, heights, weights, attacks, defenses, speeds}})
    
      }
      
    })();

  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  toggleModal = (event = null) => {
    let modalEl = document.querySelector('.modal')
    let modalContentEl = document.querySelector('.modal-content')

    if (modalEl.style.visibility !== 'visible' && modalContentEl.style.visibility !== 'visible') {

      if (event.target.matches(".modal")) {
        if (this.state.canClick === true) {
            modalEl.style.visibility = "visible";
            modalEl.style.opacity = "1";
            modalContentEl.style.visibility = "visible";
            modalContentEl.style.opacity = "1";
            modalContentEl.style.width = "1000px"
            this.setState({canClick: false})
            setTimeout(() => {
              this.setState({canClick: true})
            }, 1000)
        }
      } else {
            modalEl.style.visibility = "visible";
            modalEl.style.opacity = "1";
            modalContentEl.style.visibility = "visible";
            modalContentEl.style.opacity = "1";
            modalContentEl.style.width = "1000px"
      }

    } else if (modalEl.style.visibility == 'visible' && modalContentEl.style.visibility == 'visible') {

      if (event.target.matches(".modal")) {
          if (this.state.canClick === true) {
            modalEl.style.visibility = 'hidden';
            modalEl.style.opacity = "0";
            modalContentEl.style.visibility = 'hidden';
            modalContentEl.style.opacity = "0";
            modalContentEl.style.width = "0px"
            // this.setState({canClick: false})
            // setTimeout(() => {
            //   this.setState({canClick: true})
            // }, 1000)
          }
      }

    }

  }

  handleClickOnCard = (e) => {
    let clickedCard = e.target.closest('.card-content')
    let clickedCardId = clickedCard.getAttribute("id")
    this.toggleModal(e);
    

    this.setState({clicked: {
      image: this.state.pokemon.images[clickedCardId],
      name: this.state.pokemon.names[clickedCardId],
      type: this.state.pokemon.types[clickedCardId],
      height: this.state.pokemon.heights[clickedCardId],
      weight: this.state.pokemon.weights[clickedCardId],
      hp: this.state.pokemon.hps[clickedCardId],
      attack: this.state.pokemon.attacks[clickedCardId],
      defense: this.state.pokemon.defenses[clickedCardId],
      speed: this.state.pokemon.speeds[clickedCardId]
    }})

    
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
          <Modal clickedData={this.state.clicked} toggleModal={this.toggleModal} />
          <Display length={this.state.pokemon.names.length} title={this.state.title} handleChange={this.handleChange} />
          <CardList handleClickOnCard={this.handleClickOnCard} pokemon={filterPokemon()}></CardList>
      </div>
    );
  }


}

export default App;
