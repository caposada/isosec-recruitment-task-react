import reactLogo from './logo.svg';
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
        Footer info
      </footer>
    </div>
  );
}

export default App;
