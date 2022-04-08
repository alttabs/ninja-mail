import styled from 'styled-components';

export const Container = styled.div`
	background-size: cover;
	background-repeat: no-repeat;
	height: 226px;
	background-position: center;
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	align-content: space-around;
	flex-grow: 1;
`;
export const Form = styled.div`
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;

  input{
    height: 65px;
    width: 420px;
    font-size: 21px;
    line-height: 25px;
  }
`;

export const Button = styled.button`
	font-size: 1rem;
	font-weight: 900;
	width: 200px;
	height: 65px;
	background-color: #4ba87d;
	color: white;
	border: none;
	margin-left: 20px;
`;
