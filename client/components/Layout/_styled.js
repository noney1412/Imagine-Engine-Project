import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	grid-template-areas:
		"head head"
		"main main";

	@media only screen and (min-width: 860) {
		background: palevioletred;
	}
`;
