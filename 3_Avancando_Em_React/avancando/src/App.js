import { useState } from 'react';
import './App.css';
import City from './assets/city.jpeg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
// import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  // const name = "Celso"
  const [userName] = useState("Pedro")
  // const cars = [
  //   {id: 1, brand:"Ferrari", color:"Vermelha", newCar: true, km: 0},
  //   {id: 1, brand:"Lamborguini", color:"Preta", newCar: false, km: 30000},
  //   {id: 1, brand:"BMW", color:"Prata", newCar: false, km: 234},
  // ]
  
  function showMessage() {
    console.log("Evento do component pai!")
  }

  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }

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
        {/* <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
        <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
        <CarDetails brand="Toyota" km={45000} color="Vermelho" newCar={false} /> */}
        {/* loop em array de objetos */}
        {/* {cars.map((car) => (
          <CarDetails 
            key={car.id}
            brand={car.brand} 
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))} */}
        {/* 48. Fragments */}
        <Fragment propFragment="teste" />
        {/* Children */}
        <Container myValue="testando">
          <p>Este é o conteúdo do container</p>
        </Container>
        {/* Executar função prop */}
        <ExecuteFunction myFunction={showMessage}/>
        {/* State lift */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
