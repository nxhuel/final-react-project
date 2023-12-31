import Product from './components/Product';
import mantenimiento from './assets/mantenimiento.jpg';
import zapatillaUno from './assets/zapatillaUno.png';
import zapatillaDos from './assets/zapatillaDos.png';
import zapatillaTres from './assets/zapatillaTres.png';
import zapatillaCuatro from './assets/zapatillaCuatro.png';
import zapatillaCinco from './assets/zapatillaCinco.png';
import zapatillaSeis from './assets/zapatillaSeis.png';
import zapatillaSiete from './assets/zapatillaSiete.png';
import zapatillaOcho from './assets/zapatillaOcho.png';
import './App.css';

function App() {
  const productsData = [
    { id: 1, nombre: 'Producto 1', precio: 19.99, imagen: zapatillaUno, detalles: '- Nike' },
    { id: 2, nombre: 'Producto 2', precio: 29.99, imagen: zapatillaDos, detalles: 'Nike' },
    { id: 3, nombre: 'Producto 3', precio: 39.99, imagen: zapatillaTres, detalles: 'Topper' },
    { id: 4, nombre: 'Producto 4', precio: 49.99, imagen: zapatillaCuatro, detalles: 'Vans' },
    { id: 5, nombre: 'Producto 5', precio: 59.99, imagen: zapatillaCinco, detalles: 'Nike' },
    { id: 6, nombre: 'Producto 6', precio: 69.99, imagen: zapatillaSeis, detalles: 'Nike' },
    { id: 7, nombre: 'Producto 7', precio: 79.99, imagen: zapatillaSiete, detalles: 'Nike' },
    { id: 8, nombre: 'Producto 8', precio: 89.99, imagen: zapatillaOcho, detalles: 'Nike' },
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
            <Product key={product.id} nombre={product.nombre} precio={product.precio} imagen={product.imagen} detalles={product.detalles}/>
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
