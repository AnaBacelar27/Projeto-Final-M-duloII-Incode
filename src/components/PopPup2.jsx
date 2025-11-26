import { useState } from "react";
import "../styles/PopPup2.css";
import ButtonMoveColor from "./ButtonMoveColor";
function PopPup1({ isOpen, onClose, onHandleCriarCurso }) {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [status, setStatus] = useState(true);
    
    if (!isOpen) {
        return null;
    } 

    function handleCriarCurso() {
        if (!titulo || !descricao) {
            alert("Por favor, preencha o nome e a descrição do curso.");
            return;
        }
        onHandleCriarCurso({ titulo, descricao, status });
        // Limpa os campos após adicionar
        setTitulo('');
        setDescricao('');
        setStatus(true);
    }

    return (
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-content">
                <header className="modal-header">
                    <h4>Editar curso</h4>
                    <button onClick={onClose} className="close-button">&times;</button>
                </header>
                <div className="modal-body">
                    <p className="name-curso">Nome do curso</p>
                    <input 
                        type="text" 
                        className="input-curso" 
                        placeholder="Ex:Fundamentos do React"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                    
                    <p className="description">Descrição</p>
                    <textarea 
                        className="input-descreva" 
                        placeholder="Descreva o conteúdo do curso"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    ></textarea>

                    <div className="status-toggle-container">
                        <div>
                            <p className="status-curso">status do curso</p>
                            <p className="status-curso2">curso ativo e visível</p>
                        </div>
                        <div className="button-move"><ButtonMoveColor isClicked={status} setIsClicked={setStatus} /></div>
                    </div>

                    <div className="button-container">
                        <button onClick={handleCriarCurso} className="edit-curso">Atualizar curso</button>
                        <button onClick={onClose} className="cancell-button">Cancelar</button>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default PopPup1;