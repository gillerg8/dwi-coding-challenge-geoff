import React, { Fragment } from 'react';
import { render } from 'react-dom';
import ProductListing from './components/ProductListing';
import ZipCodeLookup from './components/ZipCodeLookup';
import styled from '@emotion/styled';

const PageContainer = styled.div`
	width: 100%;
	max-width: 480px;
	counter-reset: section;
	font-family: 'Whitney Cond SSm A', 'Whitney Cond SSm B', sans-serif;
`;

const App = () => {
	return (
		<PageContainer>
			<ProductListing responseCode='0033008' />
			<ZipCodeLookup />
		</PageContainer>
	);
};

render(<App />, document.getElementById('landing-page-app'));
