import React, { useState } from 'react';
import '../App.css'

function Product({ nombre, precio, imagen, detalles }) {
    const [mostrarDetalles, setMostrarDetalles] = useState(false);

    return (
        <>
            <div className={`productLista ${mostrarDetalles ? 'mostrarDetalles' : ''}`}>
                <h3>{nombre}</h3>
                <p>Precio: ${precio}</p>
                <img src={imagen} alt={nombre} />
                <button onClick={() => setMostrarDetalles(!mostrarDetalles)}>
                    Ver detalles
                </button>
                {mostrarDetalles && <div className="detallesContainer">{detalles}</div>}
            </div>
            
        </>
    )
}

export default Product;

