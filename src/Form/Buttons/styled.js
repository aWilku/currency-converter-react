import styled from "styled-components";

export const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const StyledButton = styled.button`
    flex-basis: 300px;
    background-color: #0080B1;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    padding: 10px;
    transition: 1s;
    cursor: pointer;

    &:hover{
        background-color: #336399;
        transform: scale(1.1);
    }

    &:active{
        background-color: #407bbf;
    }
`;