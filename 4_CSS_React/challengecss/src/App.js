// import logo from './logo.svg';
import './App.css';
import Car from './components/Car';

function App() {
  const myCars = [
    { name: "Polo", km: 0, color: "Branco" },
    { name: "Fusca", km: 300000, color: "Amarelo" },
    { name: "Palio", km: 150000, color: "Prata" },
  ];

  return (
    <div className="App">
      <h1>Showroom de Carros!</h1>
      <div className='car-container'>
        {myCars.map((car) => (
          <Car car={car}/>
        ))}
      </div>
    </div>
  );
}

export default App;
