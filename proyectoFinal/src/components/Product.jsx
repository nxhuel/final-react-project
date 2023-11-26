function Product({ nombre, precio, imagen}) {
    return (
        <div className="productLista">
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <img src={imagen} alt={nombre} />
            <button>Ver detalles</button>
        </div>
    );
}

export default Product;

