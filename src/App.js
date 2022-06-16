import reactLogo from './logo.svg';
import './App.css';
import CocktailList from './components/CocktailList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        The Cocktail App
      </header>
      <main>
        <CocktailList />
      </main>
      <footer>
        Footer info
      </footer>
    </div>
  );
}

export default App;
