import React, { Fragment, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import SectionHeader from './SectionHeader';

const ProductDetailsContent = styled.p`
	font-size: 0.9rem;
	line-height: 1.2rem;
`;

const ProductRadio = styled.label`
	cursor: pointer;
	display: flex;
	align-items: center;
	font-size: 0.9rem;
	margin-bottom: 15px;
	span {
		margin-left: 5px;
	}
`;

const ProductListing = ({ responseCode }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(`https://www.wsjwine.com/api/offer/${responseCode}`)
			.then((response) => response.json())
			.then((data) => {
				const mainItems = data.response.mainItems;

				const productData = mainItems.map((item) => {
					return {
						name: item.product.name,
						price: item.listPrice,
						numberOfBottles: item.product.skus[0].numberOfBottles,
						color: item.product.colourName
					};
				});
				setProducts(productData);
			})
			.catch((err) => {
				console.log('err', err);
			});
	}, []);

	return (
		<Fragment>
			<SectionHeader>
				<h2>Which Case Would You Like?</h2>
			</SectionHeader>
			<ProductDetailsContent>
				Whatever you choose, we’ll add in two bonus Cabs and two crystal glasses
				and you’ll have the complete package – worth over $250 – for ONLY $69.99
				(plus $19.99 shipping & applicable tax; please allow 5-10 days for
				delivery, depending on shipping state).
			</ProductDetailsContent>
			<div>
				{products.map((product) => {
					return (
						<ProductRadio key={product.name}>
							<input
								type='radio'
								name='product'
								id={product.color.toLowerCase()}
							/>
							<span>
								<strong>{product.name}</strong> + 2 Bonus Bottles & Glasses{' '}
								<strong>JUST $69.99</strong> <a href='#' />
							</span>
						</ProductRadio>
					);
				})}
			</div>
		</Fragment>
	);
};

export default ProductListing;
