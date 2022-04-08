import styled from 'styled-components';
import Image from 'next/image';

export const StyledLogo = styled(Image)`
	flex-grow: 1;
	height: fit-content !important;
	width: 160px;
`;

export const StyledText = styled.h1`
	width: 200px;

	font-family: 'raleway';
	font-style: normal;
	font-weight: 900;
	font-size: 35px;
	line-height: 41px;
	color: #000000;
`;

export const FlexDiv = styled.div`
{
	display: flex;
	justify-content: flex-end;
	position: relative;
  z-index: 288;
  pointer-events: none;
  height: 41px;
	margin-left: 50px;
  margin-top: -74px;
  margin-bottom: 33px;
  min-height: 41px;
	margin-right: 50px;
}
a {
	pointer-events: auto;
	cursor: pointer;
	padding: 4px 6px;
	margin: 0 10px;
	font-size: 1.7rem;
  font-weight: 800;
  color: black;
  border-bottom: 5px solid #4ba87d;
	text-decoration: none;
}
`;
