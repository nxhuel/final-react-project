import Product from './components/Product';
import mantenimiento from './assets/mantenimiento.jpg';
import './App.css';

function App() {
  const productsData = [
    { id: 1, nombre: 'Producto 1', precio: 19.99, imagen: mantenimiento },
    { id: 2, nombre: 'Producto 2', precio: 29.99, imagen: mantenimiento },
    { id: 3, nombre: 'Producto 3', precio: 39.99, imagen: mantenimiento },
    { id: 4, nombre: 'Producto 4', precio: 49.99, imagen: mantenimiento },
    { id: 5, nombre: 'Producto 5', precio: 59.99, imagen: mantenimiento },
    { id: 6, nombre: 'Producto 6', precio: 69.99, imagen: mantenimiento },
    { id: 7, nombre: 'Producto 7', precio: 79.99, imagen: mantenimiento },
    { id: 8, nombre: 'Producto 8', precio: 89.99, imagen: mantenimiento },
  ];

  return (
    <>
      <header>
        <div>
          <h1>BESTSHOES</h1>
        </div>
      </header>

      <section className="contenedorProduct">
        <h2 className='productTitulo'>Productos Destacados</h2>
        <div className="productCajas" id="products">
          {productsData.map(product => (
            <Product key={product.id} nombre={product.nombre} precio={product.precio} imagen={product.imagen} />
          ))}
        </div>
      </section>

      <footer>
        <p>&copy; 2023 BestShoes. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App
