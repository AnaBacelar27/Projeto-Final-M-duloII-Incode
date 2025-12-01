import { useState } from "react";
import Header from "../components/Header";
import ListaDeCursos from "../components/ListaDeCursos";
import { TicketPlusIcon, EditIcon, Trash2, ChevronsLeft } from "lucide-react";
import "../styles/Aulas.css";

const Aulas = () => {
  return (
    <div className="box">
      <nav>
        {" "}
        <button id="btnVoltar">
          <ChevronsLeft /> Voltar para o curso
        </button>{" "}
      </nav>
      <div className="mains">
        <section className="infoCurso">
          <h1 className="titulos">Fundamentos de React</h1>
          <p className="txt_btn">Ativo</p>
          <p className="txt">
            Aprenda os conceitos básicos do React e construa aplicações
          </p>
        </section>

        <section className="Aulas">
          <h2 className="titulos">Aulas</h2>
          <button id="btnAdd">+ Adicionar Aula</button>
        </section>

        <section className="listaAulas">
          <ul>
            <li className="itens">
              <div>
                <h3 className="titulos">Introdução ao React</h3>
                <p>30 minutos</p>
              </div>
              <section className="opc">
                <button>
                  {" "}
                  <EditIcon />{" "}
                </button>
                <button>
                  {" "}
                  <Trash2 />{" "}
                </button>
              </section>
            </li>
            <li className="itens">
              <div>
                <h3 className="titulos">Introdução ao React</h3>
                <p>30 minutos</p>
              </div>
              <section className="opc">
                <button>
                  {" "}
                  <EditIcon />{" "}
                </button>
                <button>
                  {" "}
                  <Trash2 />{" "}
                </button>
              </section>
            </li>
            <li className="itens">
              <div>
                <h3 className="titulos">Introdução ao React</h3>
                <p>30 minutos</p>
              </div>
              <section className="opc">
                <button>
                  {" "}
                  <EditIcon />{" "}
                </button>
                <button>
                  {" "}
                  <Trash2 />{" "}
                </button>
              </section>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Aulas;
