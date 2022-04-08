import styled from 'styled-components';

export const VideoContainer = styled.div`
	padding-top: 140px;
	justify-content: center;
	background-color: #f4f4f4;
	display: flex;
`;
export const VideoDiv = styled.div`
	background-image: url('VIDEO.png');
	background-size: cover;
	background-repeat: no-repeat;
	height: 531px;
	background-position: center;
	text-align: center;
	width: 944px;

	h1 {
		color: White;
		font-size: 6rem;
		font-weight: 900;
	}

	button {
		width: 200px;
		height: 60px;
		margin-left: auto;
		margin-right: auto;
		background-color: white;
		color: #4ba87d;
		border: none;
		font-weight: 900;
		font-size: 1.5rem;
	}
`;
