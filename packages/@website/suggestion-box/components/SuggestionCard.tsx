import styled from '@emotion/styled';
import React from 'react';

export const SuggestionCard: React.FC = (props: any) => {
    return (
        <Container>
            <h2>Suggestion Card</h2>
            <p>
                O teste médico TC6M avalia a capacidade funcional e tolerância
                ao esforço em pacientes com doenças respiratórias,
                cardiovasculares ou neuromusculares, por meio de uma caminhada
                de 6 minutos. É usado para monitorar a progressão da doença e
                ajustar o tratamento.
            </p>
            <span>❤️ 103</span>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    p {
        text-align: justify;
    }
`;
