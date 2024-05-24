import styled from "styled-components";

const StyledMain = styled.main`
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px;

@media (max-width: 767px) {
        padding: 5px;
}
`;

const Main = ({ children }) => (
    <StyledMain>
        {children}
    </StyledMain>
);

export default Main;