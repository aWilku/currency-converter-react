import styled from "styled-components";

export const StyledForm = styled.form`
    width: 85%;
    max-width: 500px;
    padding: 10px;
    margin: 10px auto;
    background-color: #ffffff26;
    color: #ffffff;
    border: 2px solid #d6d6d6;
    border-radius: 10px;
`;

export const StyledFieldset = styled.fieldset`
    padding: 10px;
    margin: 10px 0;
    border: 2px solid #254870;
    border-radius: 5px;
`;

export const StyledText = styled.span`
    display: inline-block;
    width: 100%;
    max-width: 100px;
    margin: 0 10px 5px 0;
`;

export const StyledField = styled.input`
    width: 100%;
    max-width: 300px;
    border: 1px solid #254870;
    border-radius: 5px;
    padding: 5px;
`;

export const StyledButton = styled.button`
    width: 100%;
    background-color: #0080B1;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;

    &:hover{
        background-color: #336399;
    }

    &:active{
        background-color: #407bbf;
    }
`;