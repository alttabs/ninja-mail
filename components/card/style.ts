import styled from 'styled-components';
import Image from 'next/image';

export const Imageper = styled(Image)`
background color: red;
&:hover {
    cursor:pointer;
  }
`;

export const Container = styled.div`
	width: 320px;
	margin-right: 20px;
	margin-top: 0px;
`;
export const TextDiv = styled.div`
	background-color: white;
	padding-bottom: 35px;
	margin-top: -5px;
`;
export const Text = styled.p`
	margin-top: 0px;
	font-size: 16px;
	line-height: 26px;
`;
export const Link = styled.link`
	margin-right: 20px;
	padding-right: 5px;
	padding-left: 5px;
	color: #4ba87d;
	border: none;
	background-color: #FFFFFFF;
	&:hover {
		cursor: pointer;
		color: #000000;
	}
`;

export const Info = styled.div`
	width: 320px;
	p{
		font-size:20px;
	}
`;
