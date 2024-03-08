import logo from "./logo.svg";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import "./App.css";
import CountriesList from "./Components/Countries/CountriesList";

function App() {
  return (
    <div className="App">
      <div className="m-p">
        <form className="d-flex ">
          <input
            className="form-control me-sm-2 "
            type="search"
            placeholder="Search"
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
<CountriesList />

    
    </div>
  );
}

export default App;
