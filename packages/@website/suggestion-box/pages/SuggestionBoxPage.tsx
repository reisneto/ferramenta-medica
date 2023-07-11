'use client';
import styled from '@emotion/styled';
import { SuggestionForm } from '../components/SuggestionForm';

export const SuggestionBoxPage = () => {
    return (
        <Container>
            <SuggestionForm />
            <span>list of suggestions</span>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;