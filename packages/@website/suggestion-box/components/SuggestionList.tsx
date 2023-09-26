'use client';
import styled from '@emotion/styled';
import { SuggestionCard } from './SuggestionCard';
import { use, useEffect, useState } from 'react';
import { Suggestion } from '../types/Suggestion';
import { queryClient } from '../../../@common/ui/utils/queryClient';
import { CircularProgress, Typography } from '@mui/material';

export const SuggestionList: React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const suggestions = use(
        queryClient('suggestions', () =>
            fetch('http://localhost:3000/api/suggestions').then((res) =>
                res.json(),
            ),
        ),
    ) as { data: Suggestion[] };

    return (
        <Container>
            <Typography variant="h2">Sugestões</Typography>
            {isClient ? (
                <ContainerList>
                    {suggestions?.data.map((suggestion, index) => (
                        <SuggestionCard key={index} suggestion={suggestion} />
                    ))}
                </ContainerList>
            ) : (
                <CircularProgress />
            )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;

const ContainerList = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;
