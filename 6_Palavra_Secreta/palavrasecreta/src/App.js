// CSS
import './App.css';

// React
import {useCallback, useEffect, useState} from "react"

// Data
import {wordsList} from "./data/words"

// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 1, name: "game"},
  {id: 1, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  
  const [pickedWord, setPickedWord] = useState("")
  const [pikedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const pickedWordCategory = () => {
    // escolhendo uma categoria aleatoria
    const categories = Object.keys(words)
    const category = 
      categories[Math.floor(Math.random() * Object.keys(categories).length)]
    console.log(category)

    // escolhendo uma palavra aleatoria
    const word = 
      words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return {word, category}
  }

  // startar o game
  const startGame = () => {
    // escolhe palavra e escolhe categoria
    const {word, category} = pickedWordCategory()
    console.log(word, category)

    // criando array de letras
    let wordLetters = word.split("")

    // Normalizando entrada de letras
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    console.log(word, category)
    console.log(wordLetters)

    // completando estados
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters)

    setGameStage(stages[1].name)
  }

  // processar letra de input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
