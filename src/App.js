import './App.css';
import Books from './components/Books/Books';
import Cart from './components/Cart/Cart';
import AllCategories from './components/Filter/AllCategories';
import './index.css';

function App() {
  
  return (

    <div className="App">
    <AllCategories />
    <hr/>

    <Cart />
    
      <Books />

    </div>
  );
}

export default App;
