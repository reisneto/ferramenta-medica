import { Meta, StoryObj } from '@storybook/react';
import { SuggestionCard } from '../packages/@website/suggestion-box/components/SuggestionCard';

const meta: Meta<typeof SuggestionCard> = {
    title: 'Suggestion/Card',
    component: SuggestionCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SuggestionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
