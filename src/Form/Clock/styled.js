import styled from "styled-components";

export const StyledClock = styled.p`
    font-family: 'Roboto Mono', monospace;
    font-size: 13;
    color: ${({ theme }) => theme.colors.black};
    text-align: right;
    margin: 0 auto 10px;
    padding: 5px 0;
`;