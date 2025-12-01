import { useState } from 'react'
import './styles/App.css'
import Header from './components/Header'
import ListaDeCursos from './components/ListaDeCursos'
import PopPup1 from './components/PopPup1'

function App() {
  const [cursos] = useState([
    {
      id: 1,
      titulo: "Fundamentos de react",
      descricao: "Aprenda conceitos basicos do react e construa aplicacoes modernas",
      status: true,
      numAulas: 3,
    },
    {
      id: 2,
      titulo: "Next.js Avançado",
      descricao: "Domine o framework next.js com App router e Server components",
      status: true,
      numAulas: 2,
    },
    {
      id: 3,
      titulo: "Typescript Essencial",
      descricao: "Typescript do básico ao avançado para desenvolvimento profissional",
      status: false,
      numAulas: 0,
    },
  ])

  const [modalIsOpen, setIsOpen] = useState(false);

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }

  return(
    <>
      <Header onAbrirModal={abrirModal} /> 
      <ListaDeCursos cursos={cursos} />
      <PopPup1 isOpen={modalIsOpen} onClose={fecharModal} />
      
      
    </>
  )
}

export default App;
