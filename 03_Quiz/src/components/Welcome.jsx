import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Quiz from "../img/quiz.png"

import "./Welcome.css"

export const Welcome = () => {
  const [quizState, dispatch ] = useContext(QuizContext)

  return (
    <div className="welcome">
        <h2>Seja Bem-Vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>
          Iniciar
        </button>
        <img src={Quiz} alt="Inínio do Quiz" />
    </div>
  )
}
