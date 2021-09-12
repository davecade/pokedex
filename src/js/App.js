import { useEffect } from 'react';
import './app.styles.scss';
import CardList from './components/card-list/card-list.component';
import Navbar from './components/navbar/navbar.component';
import Modal from './components/modal/modal.component';
import { connect } from 'react-redux'
import { fetchPokemonDataStart } from './redux/pokemon/pokemon.actions'

const App = ({ fetchPokemonDataStart, pokemonList }) => {

  // -- Empty array so that useEffct only runs once when App first mounted
  // useEffect(() => {
  //   if(pokemonList.length===0) {
  //     fetchPokemonDataStart(1)
  //   }
    
  // }, [])

  // -- Redux for state management - No props needs to be sent down to child components
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

const mapStateToProps = state => ({
  pokemonList: state.pokemon.pokemonList
})

const mapDispatchToProps = dispatch => ({
  fetchPokemonDataStart: id => dispatch(fetchPokemonDataStart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);