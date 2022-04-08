import styled from 'styled-components';

export const Container = styled.div`
	background-color: #ffffff;
	display: flex;
	height: 250px;
	background-position: center;
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

export const Logo = styled.div`
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	height: 250px;
`;

export const Refs = styled.div`
	width: 563px;
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;

export const Div = styled.div`
	width: 250px;
	height: 75px;;
    background: url(${(props) => props.color});
	display: flex;
	flex-direction: row;
	align-items: center;
	align-content: center;
	justify-content: center;
	color: white;
  background-size: cover
  background-repeat: no-repeat;
	background-position: center;
`;

export const Components = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	justify-content: center;
	&:hover {
		cursor: pointer;
		color: #000000;
	}
	a {
		text-decoration: none;
		color: black;
		font-weight: bold;
	}
`;

export const Divider = styled.hr`
	margin-top: 63px;
	margin-bottom: 43px;
	margin-left: auto;
	margin-right: auto;
	width: 1088px;
	height: 2px;
	border-top: 3px solid #dbdbdb;
	text-align: center;
`;

export const Directives = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	align-content: center;
	justify-content: space-around;
	font-weight: bold;

	a {
		text-decoration: none;
		color: black;
	}
`;
