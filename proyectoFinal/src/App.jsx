import Product from './components/Product';
import './App.css';

function App() {
  const productsData = [
    { id: 1, nombre: 'Producto 1', precio: 19.99 },
    { id: 2, nombre: 'Producto 2', precio: 29.99 },
    { id: 3, nombre: 'Producto 3', precio: 39.99 },
    { id: 4, nombre: 'Producto 4', precio: 49.99 },
    { id: 5, nombre: 'Producto 5', precio: 59.99 },
  ];

  return (
    <>
      <header>
        <div>
          <h1>Tu Marca</h1>
          <p>Descripción breve de tu producto o servicio.</p>
        </div>
      </header>

      <section>
        <h2>Productos Destacados</h2>
        <div id="products">
          {productsData.map(product => (
            <Product key={product.id} nombre={product.nombre} precio={product.precio} />
          ))}
        </div>

      </section>

      <footer>
        <p>&copy; 2023 Tu Marca. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App
