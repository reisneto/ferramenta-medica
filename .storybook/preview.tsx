import type { Preview } from '@storybook/react';
import { GlobalStyles } from '../packages/@common/ui/styles/globalStyles';
import NextThemeProvider from '../packages/@common/ui/providers/NextThemeProvider';
import React from 'react';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <div>
                <GlobalStyles />
                <NextThemeProvider mode="light">
                    <Story />
                </NextThemeProvider>
            </div>
        ),
    ],
};

export default preview;
