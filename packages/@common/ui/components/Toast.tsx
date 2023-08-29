'use client';
import { Alert, Snackbar } from '@mui/material';

export enum Severity {
    SUCCESS = 'success',
    INFO = 'info',
    WARNING = 'warning',
}

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    children: React.ReactNode;
    severity?: Severity;
};

export const Toast: React.FC<Props> = ({
    open,
    setOpen,
    children,
    severity = Severity.SUCCESS,
}) => {
    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                sx={{ width: '100%' }}
                closeText="fechar"
            >
                {children}
            </Alert>
        </Snackbar>
    );
};
