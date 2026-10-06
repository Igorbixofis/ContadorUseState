import { useState } from "react";
import './estilo.css';


export default function Contador(){
    const [contador, setContador] = useState(0);
    const [passo, setPasso] = useState(1);

    function incrementar(){
        setContador(ValorAnterior => ValorAnterior + passo);
    }

    function decrementar(){
        setContador(ValorAnterior => ValorAnterior - passo);
    }
    function resetar(){
        setContador(0);
    }

    return( 
   <div className="card-exemplo">
    <div className="card-header">
        <span className= 'badge'> 1. Estado númerico</span>
        <h3>Contador com passo customizado </h3>
        </div>

        <div className= 'contador-display'>
            <span className="numero-contador">{contador}</span>
        </div>

        <div className='passo-container'>
            <label htmlFor="passo">
                Passo do incremento: 
                </label>

            <input type='number' min='1' max='10' value={passo} onChange={(e) => setPasso(Number(e.target.value))} />

        </div>

        <div className='botoes-container'>
            <button className='btn-decrementar' onClick={decrementar} > - {passo} </button>
            <button className='btn-resetar' onClick={resetar}>Resetar</button>
            <button className='btn-incrementar' onClick={incrementar}> + {passo}  </button>
            </div>
        </div>
    );
}