import logo from "./logo.svg";
import "./App.css";
import ProductPage from "./components/product-page/ProductPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <section>
        <ProductPage></ProductPage>
      </section>
    </div>
  );
}

export default App;
