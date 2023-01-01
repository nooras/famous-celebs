import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AllCelebs from "./components/AllCelebs"
import SearchBar from "./components/SearchBar"

function App() {
  return (
    <div className="App">
      <h3 className='py-4'>FactWise Assessment Virtual Reference</h3>
      <SearchBar />
      <AllCelebs />
    </div>
  );
}

export default App;
