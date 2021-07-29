import styled from "styled-components";

export const StyledForm = styled.form`
    width: 85%;
    max-width: 800px;
    padding: 10px 10px 0;
    margin: 10px auto;
    background-color: ${({ theme }) => theme.colors.gallery};
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.astronaut};
    border-radius: 10px;
`;

export const StyledFieldset = styled.fieldset`
    padding: 10px;
    margin: 10px 0;
    border: 2px solid ${({ theme }) => theme.colors.astronaut};
    border-radius: 5px;
`;
export const Styledlabel = styled.label`
    display: flex;
    align-items: center;
    margin: 10px 0;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const StyledText = styled.span`
    flex-basis: 165px;
    margin: 0 10px 0 0;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.black};
    
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        flex-basis: 30px;
    }
`;

export const StyledField = styled.input`
    flex-grow:1;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.astronaut};
    border-radius: 5px;
    padding: 5px;
    font-size: 20px;
`;

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