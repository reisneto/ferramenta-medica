import { createTheme } from '@mui/material';
import { ThemeMode } from './types';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export const setTheme = (mode: ThemeMode) => {
    if (mode === 'light') {
        return lightTheme;
    } else {
        return darkTheme;
    }
};
