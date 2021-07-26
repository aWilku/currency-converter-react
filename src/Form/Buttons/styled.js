import styled from "styled-components";

export const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const StyledButton = styled.button`
    flex-basis: 300px;
    background-color: ${({ theme }) => theme.colors.buttonColors.deepCerulean};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    padding: 10px;
    transition: 0.5s;
    cursor: pointer;

    &:hover{
        background-color: ${({ theme }) => theme.colors.buttonColors.azure};
        transform: scale(1.05);
    }

    &:active{
        background-color: ${({ theme }) => theme.colors.buttonColors.steelBlue};
    }
`;