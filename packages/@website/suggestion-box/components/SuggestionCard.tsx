import styled from '@emotion/styled';
import { Paper, Typography } from '@mui/material';
import React from 'react';

interface Suggestion {
    title: string;
    description: string;
    likes: number;
}

type Props = {
    suggestion: Suggestion;
};

export const SuggestionCard: React.FC<Props> = (props) => {
    return (
        <Container elevation={1}>
            <Typography variant="h3">{props.suggestion.title}</Typography>
            <TextBody variant="body1">{props.suggestion.description}</TextBody>
            <Likes variant="body1">❤️ {props.suggestion.likes}</Likes>
        </Container>
    );
};

const Container = styled(Paper)`
    display: flex;
    padding: 16px 10px;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    border-radius: 4px;
    background: ${(props) => props.theme.palette.primary.light};
`;

const TextBody = styled(Typography)`
    text-align: justify;
    color: ${(props) => props.theme.palette.text.secondary};
`;

const Likes = styled(Typography)`
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;
