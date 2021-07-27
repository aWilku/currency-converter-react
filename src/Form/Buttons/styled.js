import styled from "styled-components";

export const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const StyledButton = styled.button`
    flex-basis: 300px;
    background-color: ${({ theme }) => theme.colors.astronaut};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 5px;
    padding: 10px;
    transition: 1s;
    cursor: pointer;

    &:hover{
        background-color: ${({ theme }) => theme.colors.azure};
    }

    &:active{
        background-color: ${({ theme }) => theme.colors.steelBlue};
    }
`;