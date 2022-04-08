import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
	pointer-events: none;
	justify-content: center;
	position: relative;
	display: flex;
`;

export const TextContent = styled.div`
	pointer-events: none;
	position: relative;
	display: flex;
	flex-direction: column;
`;

export const ImageContent = styled.div`
	pointer-events: none;
	justify-content: flex-end;
	position: relative;
	display: flex;
`;

export const Title = styled.h1`
	position: relative;
	z-index: 274;
	width: 489px;
	min-width: 489px;
	min-height: 142px;
	text-align: left;
	display: flex;
	font-family: Playfair Display;
	font-size: 59px;
	margin-botton: 0;
`;

export const Text = styled.p`
	display: flex;
	position: relative;
	font-size: 20px;
	width: 489px;
	text-align: left;
	margin-top: 0;
`;

export const ImageBackground = styled(Image)`
	position: relative;
	z-index: 255;
	pointer-events: none;
	margin-right: 0px;
	width: 680px;
	min-width: 680px;
	height: 383px;
	min-height: 383pxç
	margin-top: 0px;
	margin-bottom: 0px;
	min-height: 383px;
`;

export const Greenbutton = styled.button`
	margin-right: 1rem;
	background-color: #4ba87d;
	pointer-events: auto;
	cursor: pointer;
	min-width: 200px;
	min-height: 65px;
	color: white;
	opacity: 1;
	padding: 20px;
	border-radius: 5px;
	display: inline-block;
	border: none;
	transition: all 0.4s ease 0s;
`;

export const WhiteButton = styled.button`
	margin-right: 1rem;
	background-color: #ffffff;
	pointer-events: auto;
	border: 2px solid black;
	cursor: pointer;
	min-width: 200px;
	min-height: 65px;
	color: #4ba87d;
	opacity: 1;
	padding: 20px;
	border-radius: 5px;
	display: inline-block;
	border: none;
	transition: all 0.4s ease 0s;
`;
