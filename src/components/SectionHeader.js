import React from 'react';
import styled from '@emotion/styled';

const SectionHeaderContainer = styled.div`
	position: relative;
	margin: 20px 0;
	padding: 6px 0 0 80px;
	position: relative;
	clear: both;
	border-bottom: 2px solid #d7182a;
	&:before {
		display: block;
		content: '';
		border-top: 13px solid transparent;
		border-left: 8px solid #d7182a;
		border-bottom: 13px solid transparent;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 65px;
	}
	&:after {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 65px;
		height: 26px;
		content: 'Step ' counter(section);
		counter-increment: section;
		color: #fff;
		text-align: center;
		letter-spacing: 0.8px;
		position: absolute;
		top: 0;
		left: 0;
		background-color: #d7182a;
		font-size: 16px;
	}
	h2 {
		margin: 0;
		color: #d7182a;
		font-size: 16px;
	}
`;

const SectionHeader = (props) => {
	return <SectionHeaderContainer>{props.children}</SectionHeaderContainer>;
};

export default SectionHeader;
