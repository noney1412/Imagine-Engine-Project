import styled from "styled-components";

export const Main = styled.section`
	background-color: #fff;
	margin: 30px;
	height: 600px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Header = styled.h1`
	color: #060606;
	margin: 30px;
	padding: 30px;
	font-size: 50px;
	font-family: Helvetica;
	border-bottom: 2px solid red;
	padding-bottom: 9px;
`;

export const WordList = styled.li`
	flex-basis: 50px;
	flex-direction: row;
	align-items: center;
	margin-bottom: 4px;
	border-radius: 10px;
	border-bottom: 3px;
	box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Vocab = styled.header`
	margin-right: 80px;
	margin-left: 40px;
`;

export const Meaning = styled.main``;
