import {Img} from "./Img"
export const Product = (props) => {
	const { name, images, description, features, price } = props.product;

	

	

	return (
		<article className='product'>
			<h3>{name}</h3>
			<Img images={images} />
			<p>{description}</p>
			<ul>
				{features.map((feature, idx) => {
					return <li key={idx}>{feature}</li>;
				})}
			</ul>
			<p>&pound;{price}</p>
			<div className='promo-blocks__actions'>
				<a className='button--anchor'>Full Details</a>
				<button onClick={() => props.addToCart(props.product)}>
					Add to cart
				</button>
				<button onClick={() => props.removeFromCart(props.product)}>
					Remove Item
				</button>
			</div>
		</article>
	);
};
