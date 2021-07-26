import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.astronaut};
    border-radius: 5px;
    text-align: center;
    margin: 10px auto;
    width: 85%;
    max-width: 800px;
`;

export const StyledTitle = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    margin: 5px;
`;
