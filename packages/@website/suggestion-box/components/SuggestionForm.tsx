'use client';
import { Button, Paper, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from 'react';
import { useRecaptcha } from '../hooks/useRecaptcha';
import { TextArea } from '../../../@common/ui/components/TextArea';

export const SuggestionForm = () => {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const { isRobot, handleRecaptchaChange } = useRecaptcha();

    const handleSubmit = () => {
        const token = recaptchaRef.current?.getValue();
        console.log(token);
    };

    return (
        <Container elevation={3}>
            <Typography>Que ferramenta você precisa? Por quê?</Typography>
            <FormFields>
                <TextField label="título" variant="outlined" />
                <TextArea
                    aria-label="descrição do que precisa"
                    minRows={3}
                    placeholder="escreva aqui..."
                />
                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    ref={recaptchaRef}
                    hl="pt-BR"
                    onChange={handleRecaptchaChange}
                />
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={isRobot}
                >
                    Enviar
                </Button>
            </FormFields>
        </Container>
    );
};

const Container = styled(Paper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    min-width: 300px;
    @media (min-width: 768px) {
        min-width: 600px;
    }
    padding: ${(props) => props.theme.spacing(4)};
`;

const FormFields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 300px;
`;
