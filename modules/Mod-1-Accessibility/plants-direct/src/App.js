import { useState } from 'react';
import data from './products.json';
import { Product } from './components/Product';
import './App.css';

function App() {
	const [cart, setCart] = useState(data.cart);

	const addToCart = (product) => {
		product.addedToCart = true;
		setCart([...cart, product]);
    console.log(cart);
	};

	const removeFromCart = (product) => {
		
    product.addToCart = false;
    setCart(cart.filter(item => item !== product ))
    console.log("This is remove from cart" ,cart)
  }
	return (
		<div className='App'>
			{data.products.map((product) => (
				<Product
					key={product.productId}
					product={product}
					addToCart={addToCart}
					removeFromCart={removeFromCart}
					setCartStatus={setCartStatus}
					cartStatus={cartStatus[product.productId]}
				/>
			))}
		</div>
	);
}

export default App;
