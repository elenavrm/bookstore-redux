import './App.css';
import Books from './components/Books/Books';
import Cart from './components/Cart/Cart';
import AllCategories from './components/Filter/AllCategories';
import './index.css';

function App() {
  
  return (
    <div className="App">
    <div className='block'>
    <h1> Hogwarts Library </h1>
      <Books />
    </div>
    <div className='block'>
    <AllCategories />
    <Cart />
    </div>
    </div>
  );
}

export default App;
