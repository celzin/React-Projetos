import { useState } from 'react';
import './App.css';
import City from './assets/city.jpeg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  const name = "Celso"
  const [userName] = useState("Pedro")

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
        <ListRender/>
        <ConditionalRender/>
        {/* Props */}
        <ShowUserName name={userName}/>
        {/* Destructuring */}
        <CarDetails brand="VW" km={10000} color="Azul" />
    </div>
  );
}

export default App;
