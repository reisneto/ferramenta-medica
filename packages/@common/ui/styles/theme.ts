import { createTheme } from '@mui/material';
import { ThemeMode } from './types';

export const theme = (mode: ThemeMode) => {
    return createTheme({
        palette: {
            mode,
            primary: {
                main: '#4682b4',
                light: '#fff',
                dark: '#000',
            },
            text: {
                secondary: 'rgba(0,0,0,.8)',
            },
        },
        typography: {
            h1: {
                fontSize: 32,
            },
            h2: {
                fontSize: 32,
                color: 'rgba(0,0,0,.8)',
            },
            h3: {
                fontSize: 24,
                color: 'rgba(0,0,0,.7)',
            },
            body1: {
                fontSize: 16,
            },
        },
    });
};
