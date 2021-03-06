import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;

    margin: 30px 0 0 0;
    padding: 10px;

    border-radius: 5px;

    font-weight: bold;
    color: ${props => props.theme.colors.letter};
    background-color: ${props => props.theme.colors.warning};

    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
    }
`;