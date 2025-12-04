import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import ListaDeCursos from "./components/ListaDeCursos";
import Aulas from "./components/Aulas";
import PopPup1 from "./components/PopPup1";

// []

function App() {
  const [cursos, setCursos] = useState([
    {
      id: 1,
      titulo: "Fundamentos de react",
      descricao:
        "Aprenda conceitos basicos do react e construa aplicacoes modernas",
      status: true,
      numAulas: 3,
    },
    {
      id: 2,
      titulo: "Next.js Avançado",
      descricao:
        "Domine o framework next.js com App router e Server components",
      status: true,
      numAulas: 2,
    },
    {
      id: 3,
      titulo: "Typescript Essencial",
      descricao:
        "Typescript do básico ao avançado para desenvolvimento profissional",
      status: false,
      numAulas: 0,
    },
  ]);

  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cursos", JSON.stringify(cursos));
  }, [cursos]);

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }

  function apagarCurso(id) {
    const novosCursos = cursos.filter((curso) => curso.id !== id);
    setCursos(novosCursos);
  }

  function adicionarCurso(novoCurso) {
    const cursoComId = {
      ...novoCurso,
      id: Date.now(),
      numAulas: 0,
    };
    setCursos([...cursos, cursoComId]);
    fecharModal();
  }

  return (
    <>
      <Header onAbrirModal={abrirModal} />
      <ListaDeCursos cursos={cursos} onApagarCurso={apagarCurso} />
      <PopPup1
        isOpen={modalIsOpen}
        onClose={fecharModal}
        onAdicionarCurso={adicionarCurso}
      />
    </>
  );
}

export default App;
