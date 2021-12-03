import './app.styles.scss';
import CardList from './components/card-list/card-list.component';
import Navbar from './components/navbar/navbar.component';
import Modal from './components/modal/modal.component';


const App = () => {

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

export default App;