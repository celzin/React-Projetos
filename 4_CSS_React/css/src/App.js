// import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Celso");
  const redTitle = true

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent/>
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}> Este elemento foi estilizado de forma inline</p>
      <p style={{color: "magenta", padding: "25px", borderTop: "2px solid red"}}> Este elemento foi estilizado de forma inline</p>
      {/* CSS Inline dinamico */}
      <h2 style={n<10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={n>10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={name === "A" ? ({color: "green", backgroundColor: "#000"}) : null}>Teste useState</h2>
      {/* Classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título terá classe dinâmica.</h2>
      {/* CSS Modules */}
      <Title />
      <h2 className='my_title'>Testando class my_title</h2>
    </div>
  );
}

export default App;
