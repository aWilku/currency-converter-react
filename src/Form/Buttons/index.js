import { StyledButtonContainer, StyledButton } from "./styled"

const Buttons = ({ text }) => (
    <StyledButtonContainer>
        <StyledButton>{text}</StyledButton>
    </StyledButtonContainer>
);

export default Buttons;