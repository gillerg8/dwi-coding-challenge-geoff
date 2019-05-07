import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import SectionHeader from './SectionHeader';

const ZipCodeContainer = styled.div`
	margin-bottom: 15px;
`;

const ZipCodeInput = styled.input`
	height: 24px;
	width: 100px;
	border-radius: 4px;
	border: 1px solid #ccc;
	font-size: 14px;
`;

const LocationInfo = styled.span`
	margin-left: 10px;
`;

const LocationMessage = styled.div`
	clear: both;
	margin-bottom: 20px;
	font-size: 0.9rem;
	border-radius: 4px;
	overflow: hidden;
	transition: all 0.6s ease-in-out;
	line-height: 0;
	padding: 10px 35px 10px 15px;
	color: transparent;

	&.show {
		line-height: 1.5;
		background-color: #fcf8e3;
		color: #8a6d3b;
		border: 1px solid #fbeed5;
	}
`;

const ZipCodeLookup = () => {
	const [location, setLocation] = useState(
		'<em>Enter ZIP to populate City and State</em>'
	);
	const [displayMessage, setDisplayMessage] = useState(false);

	let updateZipCode = (evt) => {
		const zipCodeValue = evt.target.value;

		if (zipCodeValue.length === 5) {
			fetch(`https://www.wsjwine.com/api/address/zipcode/${zipCodeValue}`)
				.then((response) => response.json())
				.then((data) => {
					const locationData = data.response;
					if (typeof locationData !== 'undefined') {
						const location = `${locationData.city}, ${locationData.stateName}`;
						setLocation(location);
						if (locationData.stateName === 'Connecticut') {
							setDisplayMessage(true);
						} else {
							setDisplayMessage(false);
						}
					} else {
						setDisplayMessage(false);
					}
				})
				.catch(() => {
					setDisplayMessage(false);
				});
		} else {
			setLocation('<em>Enter ZIP to populate City and State</em>');
			setDisplayMessage(false);
		}
	};

	return (
		<Fragment>
			<SectionHeader>
				<h2>Zip Code Lookup</h2>
			</SectionHeader>
			<ZipCodeContainer>
				<ZipCodeInput
					type='text'
					name='zipCode'
					id='zip-code'
					onChange={(evt) => updateZipCode(evt)}
					maxLength={5}
				/>
				<LocationInfo dangerouslySetInnerHTML={{ __html: location }} />
			</ZipCodeContainer>
			<LocationMessage className={displayMessage ? 'show' : 'hide'}>
				Upon completion of this form, your order will be forwarded to The Wine
				Cellar, located in Wallingford, CT for processing and shipping.
			</LocationMessage>
		</Fragment>
	);
};

export default ZipCodeLookup;
