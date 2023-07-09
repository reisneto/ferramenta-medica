'use client';
import { ThemeProvider } from '@mui/material/styles';
import { setTheme } from '../styles/theme';
import { CssBaseline } from '@mui/material';
import { ThemeMode } from '../styles/types';

interface Props {
    children: React.ReactNode;
    mode?: ThemeMode;
}

const NextThemeProvider = ({ children, mode = 'light' }: Props) => {
    return (
        <ThemeProvider theme={setTheme(mode)}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
export default NextThemeProvider;
