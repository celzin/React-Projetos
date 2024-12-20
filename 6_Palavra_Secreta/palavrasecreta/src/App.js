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
// altera quantidade de tentativas
const guessesQty = 3

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  
  const [pickedWord, setPickedWord] = useState("")
  const [pikedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(5)
  const [score, setScore] = useState(50)

  const pickedWordCategory = useCallback(() => {
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
  }, [words])

  // startar o game
  const startGame = useCallback(() => {
    // limpando todas as letras
    clearLetterStates()

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
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }, [pickedWordCategory])

  // processar letra de input
  const verifyLetter = (letter) => {
    // setGameStage(stages[2].name)
    console.log(letter)

    // normalizando letra recebida do usuario
    const normalizedLetter = letter.toLowerCase()
    
    // checar se a letra ja foi utilizada
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return
    }
    // envie letras adivinhadas ou remova 
    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)

    }

  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  // checa se as tentativas terminaram

  // monitora a alteracao de um dado
  useEffect(() => {
    if(guesses <= 0) {
      // resetar todos os states
      clearLetterStates()

      setGameStage(stages[2].name)
    }
  }, [guesses])

  // checa condicao de vitoria
  useEffect(() => {
    // transformando palavra em uma array de letras unicas
    const uniqueLetters = [...new Set(letters)]
    console.log(uniqueLetters)

    // condicao de vitoria
    if(guessedLetters.length === uniqueLetters.length) {
      // adicionando pontuacao
      setScore((actualScore) => actualScore += 100)
      // restartar jogo com nova palavra
      startGame()
    }
  }, [guessedLetters, letters, startGame]) // precisa monitorar todas funcoes usadas dentro

  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)

    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && 
        <Game 
          verifyLetter={verifyLetter} 
          pickedWord={pickedWord} 
          pikedCategory={pikedCategory} 
          letters={letters} 
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />}
      {gameStage === 'end' && 
        <GameOver 
          retry={retry} 
          score={score}
        />}
    </div>
  );
}

export default App;
