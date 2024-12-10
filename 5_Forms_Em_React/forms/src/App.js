// import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Celso", email: "celso@gmail.com", bio: "Sou um programador em busca de estágio", role: "admin"}} />
    </div>
  );
}

export default App;
