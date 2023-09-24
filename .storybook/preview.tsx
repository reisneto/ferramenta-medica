import React from 'react';
import type { Preview } from '@storybook/react';
import { GlobalStyles } from '../packages/@common/ui/styles/globalStyles';

const preview: Preview = {
    decorators: [
        (Story) => (
            <div>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <GlobalStyles />
                <Story />
            </div>
        ),
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
