import { useState } from "react";
import "../styles/Classes.css";
import { SquarePen, Trash2 } from "lucide-react";

export default function Classes() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const aulas = [
    { titulo: "Introdução ao React", duracao: "30 minutos" },
    { titulo: "Componentes e Props", duracao: "45 minutos" },
    { titulo: "Estado e Ciclo de Vida", duracao: "60 minutos" },
  ];

  return (
    <div className="curso-detalhes-container">

      <div className="curso-header">
        <h2>Fundamentos de React</h2>
        <p>
          Aprenda os conceitos básicos do React e construa aplicações modernas.
        </p>
      </div>


      <button className="btn-azul" onClick={() => setIsModalOpen(true)}>
        + Adicionar Aula
      </button>


      <div className="aulas-container">
        <h3>Aulas</h3>

        {aulas.map((aula, index) => (
          <div key={index} className="aula-card">

            <div className="aula-info">
              <span className="titulo">{aula.titulo}</span>
              <span className="duracao">{aula.duracao}</span>
            </div>

            <div className="aula-actions">
              <button className="icon-btn"> <SquarePen color="white" size={18} /></button>
              <button className="icon-btn"><Trash2 color="white" size={18} /></button>
            </div>

          </div>
        ))}
      </div>

      {isModalOpen && <AddAulaModal onClose={() => setIsModalOpen(false)} />}

    </div>
  );
}
