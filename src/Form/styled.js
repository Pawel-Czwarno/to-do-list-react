import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        overflow: auto;
    }  
`;

export const Button = styled.button`
    background-color: hsl(180, 100%, 25%);
    color: white;
    border: none;
    padding: 15px;
    transition: 1s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.1);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }
`;

export const Input = styled.input`
    padding: 15px;
    border: 1px solid #ddd;
`;