'use client';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../packages/@common/ui/styles/theme';
import { CssBaseline } from '@mui/material';
import { ThemeMode } from '../packages/@common/ui/styles/types';

interface Props {
    children: React.ReactNode;
    mode?: ThemeMode;
}

const NextThemeProvider = ({ children, mode = 'light' }: Props) => {
    return (
        <ThemeProvider theme={theme(mode)}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
export default NextThemeProvider;
