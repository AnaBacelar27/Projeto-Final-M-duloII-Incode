import "../styles/addClasses.css";
import { useState, useEffect } from "react";

export default function AddClasses({ onClose, onSave, aula, curso }) {

  const [titulo, setTitulo] = useState("");
  const [duracao, setDuracao] = useState(30);


  useEffect(() => {
    if (aula) {
      setTitulo(aula.titulo);
      setDuracao(parseInt(aula.duracao));
    }
  }, [aula]);

  function salvar() {
    onSave({
      id: aula?.id,
      titulo,
      duracao: `${duracao} minutos`
    });
  }

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h3>{aula ? "Editar Aula" : "Adicionar Aula"}</h3>

        <label>Curso</label>
        <input value={curso} disabled />

        <label>Título da Aula</label>
        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Ex: Introdução aos Hooks"
        />

        <label>Duração (minutos)</label>
        <input
          type="number"
          value={duracao}
          onChange={(e) => setDuracao(e.target.value)}
        />

        <div className="modal-actions">
          <button className="btn-primario" onClick={salvar}>
            {aula ? "Salvar Alterações" : "Criar Aula"}
          </button>

          <button className="btn-secundario" onClick={onClose}>
            Cancelar
          </button>
        </div>

      </div>
    </div>
  );
}
