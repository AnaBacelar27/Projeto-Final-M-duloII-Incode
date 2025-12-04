import "../styles/Header.css"

const Header = ({ onAbrirModal }) => {
   return(
      <header className="header">
         
      <h1>Curso</h1>
      <button onClick={onAbrirModal} className="btn-criar-curso">+ Criar curso</button>

      </header>
   )
}

export default Header;