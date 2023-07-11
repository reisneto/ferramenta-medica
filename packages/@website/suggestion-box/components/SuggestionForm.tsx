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
        <Container>
            <Typography variant="h6" component="h2">
                Que ferramenta você precisa? Por quê?
            </Typography>
            <FormFields>
                <TextField label="título" variant="outlined" />
                <TextArea
                    aria-label="descrição do que precisa"
                    minRows={3}
                    placeholder="escreva aqui..."
                />
                <Recaptcha
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    ref={recaptchaRef}
                    hl="pt-BR"
                    onChange={handleRecaptchaChange}
                    size="normal"
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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: ${(props) => props.theme.spacing(45)};
    box-sizing: border-box;
    padding: ${(props) => props.theme.spacing(4)};
    box-shadow: ${(props) => props.theme.shadows[1]};

    @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
        width: ${(props) => props.theme.spacing(80)};
    }
`;

const FormFields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

const Recaptcha = styled(ReCAPTCHA)`
    display: block;
    margin: 0 auto;
`;
