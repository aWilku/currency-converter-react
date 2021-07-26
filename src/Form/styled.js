import styled from "styled-components";

export const StyledForm = styled.form`
    width: 85%;
    max-width: 800px;
    padding: 10px 10px 0;
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
export const Styledlabel = styled.label`
    display: flex;
    align-items: center;
    margin: 10px 0;
    
    @media(max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const StyledText = styled.span`
    flex-basis: 165px;
    margin: 0 10px 0 0;
    font-size: 20px;
    
    @media(max-width: 768px){
        flex-basis: 30px;
    }
`;

export const StyledField = styled.input`
    flex-grow:1;
    width: 100%;
    border: 1px solid #254870;
    border-radius: 5px;
    padding: 5px;
    font-size: 20px;
`;