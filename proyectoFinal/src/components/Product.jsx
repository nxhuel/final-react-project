import React, { useState } from 'react';
import '../App.css'

function Product({ nombre, precio, imagen, detalles }) {
    const [mostrarDetalles, setMostrarDetalles] = useState(false);

    const handleMostrarDetalles = () => {
        setMostrarDetalles(!mostrarDetalles);
    };

    return (
        <>
            <div className="productLista">
                <h3>{nombre}</h3>
                <p>Precio: ${precio}</p>
                <img src={imagen} alt={nombre} />
                <button onClick={handleMostrarDetalles}>
                    Ver detalles
                </button>
                {mostrarDetalles && (
                    <p>{detalles}</p>
                )}
            </div>
        </>
    )
}

export default Product;

