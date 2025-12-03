import { EditIcon, Trash2 } from 'lucide-react'
import "../styles/ListaDeCursos.css"

const ListaDeCursos = ({cursos, onApagarCurso}) => {

   return(
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>

            <section className="conteudo">
               <header className='header-li'>
                  <h2>{curso.titulo}</h2>
                  <p className={curso.status ? 'status-ativo':'status-inativo'}>
                     {curso.status && "Ativo" || !curso.status && "Inativo"}
                  </p>
               </header>
               <p className='p-li'>{curso.descricao}</p>
               <p className='p-li'>{curso.numAulas} aulas</p>
            </section>

            <section className="opcoes">
               <button> <EditIcon/> </button>
               <button onClick={() => onApagarCurso(curso.id)}> <Trash2 /> </button>
            </section>

            </li>
        ))}
      </ul>
   )
}

export default ListaDeCursos;