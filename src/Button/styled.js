import styled from "styled-components";

export const ButtonsPanel = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Buttons = styled.button`
    background: transparent;
    color: teal;
    border: none;
    margin: 0 0 0 20px;
    transition: color 0.3s;

&:hover {
    color: hsl(180, 100%, 35%);
    background-color: transparent;
}

&:disabled {
    color: #ccc;
    background-color: transparent;
}

@media (max-width: 767px) {
    flex-basis: 100%;
    margin: 10px;
}
`;