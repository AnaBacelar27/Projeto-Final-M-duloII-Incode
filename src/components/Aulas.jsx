import { useState } from "react";
import AddAulaModal from "./AddClasses";
import "../styles/Classes.css";
import { SquarePen, Trash2 } from "lucide-react";

export default function Aulas() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [aulas, setAulas] = useState([
    { id: 1, titulo: "Introdução ao React", duracao: "30 minutos" },
    { id: 2, titulo: "Componentes e Props", duracao: "45 minutos" },
    { id: 3, titulo: "Estado e Ciclo de Vida", duracao: "60 minutos" },
  ]);

  const [aulaEditando, setAulaEditando] = useState(null);

  function removerAula(id) {
    const filtradas = aulas.filter((aula) => aula.id !== id);
    setAulas(filtradas);
  }

  function editarAula(aula) {
    setAulaEditando(aula); 
    setIsModalOpen(true); 
  }

  function salvarAula(aula) {
    if (aula.id) {
      setAulas((prev) =>
        prev.map((a) => (a.id === aula.id ? aula : a))
      );
    } else {
      aula.id = Date.now();
      setAulas((prev) => [...prev, aula]);
    }

    setIsModalOpen(false);
    setAulaEditando(null);
  }

  return (
    <div className="curso-detalhes-container">
      <div className="curso-header">
        <h2>Fundamentos de React</h2>
        <p>Aprenda os conceitos básicos do React e construa aplicações modernas.</p>
      </div>

      <button className="btn-azul" onClick={() => {
        setAulaEditando(null); 
        setIsModalOpen(true);
      }}>
        + Adicionar Aula
      </button>

      <div className="aulas-container">
        <h3>Aulas</h3>

        {aulas.map((aula) => (
          <div key={aula.id} className="aula-card">
            <div className="aula-info">
              <span className="titulo">{aula.titulo}</span>
              <span className="duracao">{aula.duracao}</span>
            </div>

            <div className="aula-actions">
              <button className="icon-btn" onClick={() => editarAula(aula)}>
                <SquarePen color="white" size={18} />
              </button>

              <button className="icon-btn" onClick={() => removerAula(aula.id)}>
                <Trash2 color="white" size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <AddAulaModal
          curso="Fundamentos de React"
          onClose={() => setIsModalOpen(false)}
          onSave={salvarAula}
          aula={aulaEditando}
        />
      )}
    </div>
  );
}
