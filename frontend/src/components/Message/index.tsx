import React from 'react';

import { Container } from './styles'

import formatDate from '../../utils/formatDate';

interface IMessageProps {
    message: React.SetStateAction<any> ;
}

const Message: React.FC<IMessageProps> = ({ message }) => {
    const formattedMessage = formatDate(message)

    return (
        <Container>
            {formattedMessage}
        </Container>
    )
}

export default Message;