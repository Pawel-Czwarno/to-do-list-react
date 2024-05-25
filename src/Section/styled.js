import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
    margin: 15px 0;
    box-shadow: 0 0 5px #fff;  
`;

export const Header = styled.header`
    padding: 20px;
    border-bottom: 1px solid #ddd;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;

@media (max-width: 767px) {
    grid-template-columns: 1fr;
}
`;

export const Title = styled.h2`
    margin: 0;
`;

export const Body = styled.div`
    padding: 20px;
    padding-top: 10px;

@media (max-width: 767px) {
    padding-left: 5px;
    padding-right: 5px;
}
`;