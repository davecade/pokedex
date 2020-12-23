import logo from '../logo.svg';
import '../css/main.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'


// -- Pokemon Image API: https://pokeres.bastionbot.org/images/pokemon/1.png
// -- Pokemon Data API: https://pokeapi.co/api/v2/pokemon/1

class App extends Component {

  constructor() {
    super();

    this.state = {
      pics: [],
      stats: [],
      title: "Dave's Pokedex"
    }
  }

  componentDidMount() {
    const addPokemon = ( async () => {
      let titleEl = document.querySelector('.title')

      if(this.state.pics.length < 151) {
        titleEl.innerHTML = "LOADING";
      }

      let pictures = []
      let data = []
      for(let i=1; i <= 151; i++) {
        let pokePic = await fetch(`https://pokeres.bastionbot.org/images/pokemon/${i}.png`)
        let pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        let pokeData = await pokeResponse.json();
        pictures.push(pokePic.url)
        data.push(pokeData.name)
      }

      this.setState( {pics: pictures, stats: data})
    })();
}


  render() {
    const titleEl = document.querySelector('.title');
    titleEl.innerHTML = this.state.title;

    return (
      <div className="App">
          <h1 className="title">{this.state.title}</h1>
          <CardList pics={this.state.pics} stats={this.state.stats}></CardList>
      </div>
    );
  }


}

export default App;
