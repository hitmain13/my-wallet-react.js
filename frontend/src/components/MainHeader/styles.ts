import styled from 'styled-components'

export const Container = styled.div`
    grid-area: MH;

    background-color: ${props => props.theme.colors.secondary};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;

    border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};
    margin-right: 40px;
    @media (max-width: 768px) {
        margin-right: 15px;
    }
`;

export const Welcome = styled.h3`
    font-size: 1.4em;
`;

export const UserName = styled.span``;
