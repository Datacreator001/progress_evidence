import data from './products.json';
import {Product} from './components/Product'
import './App.css';

function App() {
	return <div className='App'>
    {data.products.map(product => <Product key={product.productId} product={product}/>)} 
    products
    </div>;
}

export default App;
