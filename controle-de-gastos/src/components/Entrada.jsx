import React from "react"
import "./Entrada.css"

export default function Entrada(props){
    const totalIn = props.TotalIn
    return (
        <div className="EntradaCard">
            R$ {totalIn}
        </div>
    )
}