import products from '../products.json';

export const Product = (props) => {
	const { name, images, description } = props.product;

	return (
		<article className='product'>
			<h3>{name}</h3>
			<img src={images[0].imageSrc} alt='' />
			<p>{description}</p>
			<ul>
				<li>Likes moisture</li>
				<li>Easy care</li>
			</ul>
			<p>&pound;6.99</p>
			<div className='promo-blocks__actions'>
				<a className='button--anchor'>Full Details</a>
				<button>Add to cart</button>
			</div>
		</article>
	);
};
