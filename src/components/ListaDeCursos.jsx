import { useNavigate } from "react-router-dom";
import "../styles/ListaDeCursos.css";

export default function ListaDeCursos({ cursos, onApagarCurso }) {
  const navigate = useNavigate();

  function abrirCurso(id) {
    navigate(`/curso/${id}`);
  }

  return (
    <ul>
      {cursos.map((curso) => (
        <li key={curso.id} onClick={() => abrirCurso(curso.id)}>
          
          <div className="conteudo">

            <div className="titulo-status">
              <h2>{curso.titulo}</h2>

              <span
                className={curso.status ? "status-ativo" : "status-inativo"}
              >
                {curso.status ? "Ativo" : "Inativo"}
              </span>
            </div>

            <p className="p-li">{curso.descricao}</p>

            <p className="p-li">{curso.numAulas} aulas</p>
          </div>

          <div className="opcoes" onClick={(e) => e.stopPropagation()}>
            <svg onClick={() => alert("Editar curso")}>&#9998;</svg>
            <svg onClick={() => onApagarCurso(curso.id)}>&#128465;</svg>
          </div>
        </li>
      ))}
    </ul>
  );
}
