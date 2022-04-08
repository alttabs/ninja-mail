import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: 100px;
	background-position: center;
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
export const Div = styled.div`
	width: 150px;
	height: 120px;
	background: url(${(props) => props.color});
	display: flex;
	flex-direction: row;
	align-items: center;
	align-content: center;
	justify-content: center;
	color: white;
	background-repeat: no-repeat;
	background-position: center;
`;
