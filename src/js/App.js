import { Component } from 'react';
import './app.styles.scss';
import CardList from './components/card-list/card-list.component';
import Navbar from './components/navbar/navbar.component';
import Modal from './components/modal/modal.component';
import { connect } from 'react-redux'
import { fetchPokemonDataStart } from './redux/pokemon/pokemon.actions'

class App extends Component {

  componentDidMount() {
    const { fetchPokemonDataStart } = this.props
    fetchPokemonDataStart()
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
  fetchPokemonDataStart: () => dispatch(fetchPokemonDataStart())
})

export default connect(null, mapDispatchToProps)(App);