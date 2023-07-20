import Calculator from './components/Calculator';
import Quote from './components/quote';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Magic calculator</h1>
      </header>
      <div className="main">
        <div className="quoteSection">
          <h1>Quote of the day</h1>
          <Quote />
        </div>
        <div className="calculatorSection">
          <h1>Calculator</h1>
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
