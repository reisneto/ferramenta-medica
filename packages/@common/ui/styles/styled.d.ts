import { Theme as EmotionTheme } from '@emotion/react/macro';
import { Theme as MaterialUITheme } from '@mui/material';

// Re-declare the emotion theme to have the properties of the MaterialUiTheme
declare module '@emotion/react' {
    export interface Theme extends MaterialUITheme {}
}
