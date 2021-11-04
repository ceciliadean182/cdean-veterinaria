import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './styles/styles.css';
import ItemDetailContainer from './components/ItemDetailContainer';
//import {BrowserRouter, Routes, Route} from 'react-router-dom'




const App =() => {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting = "Nuestros productos" />
      <ItemDetailContainer />
      {/* <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/'>
            <ItemListContainer/>
          </Route>
          <Route exact path='/product/:id' component={ItemListContainer}/>
          <Route exact path='/detail/:id' component={ItemDetailContainer}/>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
