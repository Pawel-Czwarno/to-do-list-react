import styled, { css } from "styled-components";

export const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Element = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 10px;
    word-wrap: break-word;
    word-break: break-all;

    @media (max-width: 767px) {
        padding-left: 5px;
        padding-right: 5px;
    }  

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const DoneElement = styled.div`
    ${({ $done }) => $done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    height: 30px;
    width: 30px;
    border: none;
    padding: 0;
    color: #ddd;

    ${({ $toggleDone }) => $toggleDone && css`
        background-color: green;
        transition: 1s;

        &:hover {
            background-color: hsl(120, 100%, 30%);
        }

        &:active {
            background-color: hsl(120, 100%, 35%);
        }
    `}

    ${({ $remove }) => $remove && css`
        background-color: red;
        transition: 1s;

        &:hover {
            background-color: hsl(0, 100%, 65%);
        }

        &:active {
            background-color: hsl(0, 100%, 70%);
        }
    `}
`;

