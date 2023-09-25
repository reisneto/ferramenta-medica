import styled from '@emotion/styled';
import { Paper, Typography } from '@mui/material';
import React from 'react';

export const SuggestionCard: React.FC = (props: any) => {
    return (
        <Container elevation={1}>
            <Typography variant="h2">Formulário TC6M</Typography>
            <TextBody variant="body1">
                O teste médico TC6M avalia a capacidade funcional e tolerância
                ao esforço em pacientes com doenças respiratórias,
                cardiovasculares ou neuromusculares, por meio de uma caminhada
                de 6 minutos. É usado para monitorar a progressão da doença e
                ajustar o tratamento.
            </TextBody>
            <Typography variant="body1">❤️ 87</Typography>
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
