import './App.css';
import City from './assets/city.jpeg'
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
        <h1>Avançando em React</h1>
        <div>
          {/* Imagem em public */}
          <img src="/logo192.png" alt="logo192" /> 
        </div>
        <div>
          {/* Imagem em assets */}
          <img src={City} alt="City" />
        </div>
        <ManageData/>
    </div>
  );
}

export default App;
