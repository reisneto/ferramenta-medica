'use client';
import { Button, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from 'react';
import { useRecaptcha } from '../hooks/useRecaptcha';
import { TextArea } from '../../../@common/ui/components/TextArea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const suggestionSchema = z.object({
    title: z.string().min(3, { message: 'campo obrigatório' }),
    description: z.string().min(3, { message: 'campo obrigatório' }),
});

type SuggestionValidation = z.infer<typeof suggestionSchema>;

async function postSuggestion(data: any) {
    const response = await fetch('/api/suggestions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

export const SuggestionForm = () => {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const { isRobot, handleRecaptchaChange } = useRecaptcha();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SuggestionValidation>({
        resolver: zodResolver(suggestionSchema),
    });

    const onSubmit = async (data: any) => {
        try {
            await postSuggestion(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Typography variant="h6" component="h2">
                Que ferramenta você precisa? Por quê?
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="título"
                    variant="outlined"
                    {...register('title')}
                />
                {errors.title && <span>{errors.title.message}</span>}
                <TextArea
                    aria-label="descrição do que precisa"
                    minRows={3}
                    placeholder="escreva aqui..."
                    {...register('description')}
                    aria-invalid={errors.description ? 'true' : 'false'}
                />
                {errors.description && (
                    <span>{errors.description.message}</span>
                )}
                <Recaptcha
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
                    ref={recaptchaRef}
                    hl="pt-BR"
                    onChange={handleRecaptchaChange}
                    size="normal"
                />
                <Button variant="contained" disabled={isRobot} type="submit">
                    Enviar
                </Button>
            </Form>
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

const Recaptcha = styled(ReCAPTCHA)`
    display: block;
    margin: 0 auto;
`;
