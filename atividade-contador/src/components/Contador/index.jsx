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
}