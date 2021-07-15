import { useEffect } from 'react';
import './app.styles.scss';
import CardList from './components/card-list/card-list.component';
import Navbar from './components/navbar/navbar.component';
import Modal from './components/modal/modal.component';
import { connect } from 'react-redux'
import { fetchPokemonDataStart } from './redux/pokemon/pokemon.actions'

const App = ({ fetchPokemonDataStart }) => {

  // -- Empty array so that useEffct only runs once when App first mounted
  useEffect(() => {
    fetchPokemonDataStart()
  }, [])

  // -- Redux for state management - No props needs to be sent
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

const mapDispatchToProps = dispatch => ({
  fetchPokemonDataStart: () => dispatch(fetchPokemonDataStart())
})

export default connect(null, mapDispatchToProps)(App);