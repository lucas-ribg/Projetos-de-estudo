import React from 'react'
import Accordion from './Accordion'

const App = () => {

  const itens = [
    {
      titulo: "Java",
      conteudo: "Linguagem compilada e interpretada"
    },
    {
      titulo: "Python",
      conteudo: "Linguagem interpretada e tipada"
    },
    {
      titulo: "JavaScript",
      conteudo: "Executa do lado do cliente e do lado do servidor"
    }
  ]

  return (
    <div>
      <Accordion itens={itens}/>
    </div>
  )
}

export default App