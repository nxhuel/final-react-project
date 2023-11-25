import './Product.css'

function Product({ nombre, precio }) {
    return (
        <div className="contenedorProduct">
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <img src="#" alt="#" />
            <button>Ver detalles</button>
        </div>
    );
}

export default Product;

