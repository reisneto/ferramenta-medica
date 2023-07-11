import { createTheme } from '@mui/material';
import { ThemeMode } from './types';

export const theme = (mode: ThemeMode) => {
    return createTheme({
        palette: {
            mode,
        },
    });
};
