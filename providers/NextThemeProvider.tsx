'use client';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';
import { CssBaseline } from '@mui/material';

const NextThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
export default NextThemeProvider;
