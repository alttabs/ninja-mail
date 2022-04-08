import styled from 'styled-components';

export const Title = styled.div`
	color: white;
	font-size: 3rem;
	font-weight: 900;
`;

export const Container = styled.div`
	background-color: #4ba87d;
	display: flex;
	height: 300px;
	background-position: center;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Button = styled.button`
	font-size: 1rem;
	font-weight: 900;
	width: 200px;
	height: 65px;
	background-color: #ffffff;
	color: #4ba87d;
	border: none;
	margin-left: 20px;
	&:hover {
		cursor: pointer;
	}
`;
