import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'




const App =() => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            <ItemListContainer/>
          </Route>
          <Route exact path='/categoria/:id' component={ItemListContainer}/>
          <Route exact path='/producto/:productoId' component={ItemDetailContainer}/>
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
