import styled from "styled-components";

export const Container = styled.div`
	width: 340px;
	height: 240px;
	background: url(${(props) => props.color});
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;
	color: white;
	padding-left: 20px;
	padding-bottom: 20px;
	margin-right: 30px;
`;
export const Name = styled.h3`
	font-weight: 900;
	font-size: 34px;
	line-height: 40px;
`;
export const Text = styled.p`
	font-weight: 700;
	font-size: 19px;
	line-height: 22px;
`;
