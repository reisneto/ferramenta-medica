'use client';
import { Button, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useState } from 'react';
import { useRecaptcha } from '../hooks/useRecaptcha';
import { TextArea } from '../../../@common/ui/components/TextArea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Severity, Toast } from '../../../@common/ui/components/Toast';
import { useSuggestion } from '../hooks/useSuggestion';

const suggestionSchema = z.object({
    title: z.string().min(3, { message: 'campo obrigatório' }),
    description: z.string().min(3, { message: 'campo obrigatório' }),
});

type SuggestionValidation = z.infer<typeof suggestionSchema>;

type ToastType = {
    type: Severity;
    message: string;
};

export const SuggestionForm = () => {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [open, setOpen] = useState(false);
    const [toastData, setToastData] = useState<ToastType>();
    const { postSuggestion, loading: loadingSuggestionPost } = useSuggestion();
    const { isRobot, handleRecaptchaChange } = useRecaptcha();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<SuggestionValidation>({
        resolver: zodResolver(suggestionSchema),
    });

    const onSubmit = async (data: any) => {
        try {
            await postSuggestion(data);
            reset();
            setToastData({
                type: Severity.SUCCESS,
                message: 'sugestão enviada!',
            });
        } catch (error) {
            setToastData({
                type: Severity.WARNING,
                message: 'não foi possível enviar sugestão',
            });
        }
        setOpen(true);
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
                <Button
                    variant="contained"
                    disabled={isRobot || loadingSuggestionPost}
                    type="submit"
                >
                    Enviar
                </Button>
            </Form>
            <Toast open={open} setOpen={setOpen} severity={toastData?.type}>
                {toastData?.message}
            </Toast>
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
