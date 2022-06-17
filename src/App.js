import './App.css';
import DrinksList from './components/DrinksList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        The Cocktail App
      </header>
      <main className="App-main">
        <DrinksList cocktailName="margarita" />
      </main>
      <footer className="App-footer">
        Data provided by<a className="App-link" href="https://www.thecocktaildb.com/">www.thecocktaildb.com</a>
      </footer>
    </div>
  );
}

export default App;
