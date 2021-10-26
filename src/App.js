import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './styles/styles.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting = "Nuestros productos" />
    </div>
  );
}

export default App;
