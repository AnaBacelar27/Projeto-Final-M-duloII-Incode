"use client";
import { useEffect, useState } from "react";
import Header from "./Header";
import ListaDeCursos from "./ListaDeCursos";
import { TicketPlusIcon, EditIcon, Trash2, ChevronsLeft } from "lucide-react";
import "../styles/Aulas.css";
import { useNavigate } from "react-router-dom";

function Aulas() {
  const [aulas, setAulas] = useState({
    id: 1,
    nome: "Fund React",
    descricao: "Aprenda os conceitos básicos do React e construa aplicações",
    aulas: [
      {
        id: 1,
        nome: "Aula1",
        duracao: 30,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://projeto-final-att.onrender.com/aulas"
      );

      const response = result.json();

      console.log(response);
      // setAulas(response)
    };

    fetchData();
  }, []);

  function excluirAula(id) {
    setAulas(
      aulas.aulas.filter(function (aulas) {
        return aulas.id !== id;
      })
    );
  }

  const navigate = useNavigate();

  function voltarCurso() {
    navigate("/");
  }

  return (
    <div className="box">
      <nav>
        {" "}
        <button id="btnVoltar" onClick={voltarCurso}>
          <ChevronsLeft /> Voltar para o curso
        </button>{" "}
      </nav>
      <div className="mains">
        <section className="infoCurso">
          <h1 className="titulos">{aulas.nome} </h1>
          <p className="txt_btn">Ativo</p>
          <p className="txt">{aulas.descricao}</p>
        </section>

        <section className="Aulas">
          <h2 className="titulos">Aulas</h2>
          <button id="btnAdd">+ Adicionar Aula</button>
        </section>

        <section className="listaAulas">
          <ul>
            {aulas.aulas.map((aula) => (
              <li key={aula.id} className="itens">
                <div>
                  <h3 className="titulos">{aula.nome}</h3>
                  <p>{aula.duracao}</p>
                </div>
                <section className="opc">
                  <button>
                    {" "}
                    <EditIcon />{" "}
                  </button>
                  <button
                    onClick={() => {
                      excluirAula(aula.id);
                    }}
                  >
                    {" "}
                    <Trash2 />{" "}
                  </button>
                </section>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Aulas;
