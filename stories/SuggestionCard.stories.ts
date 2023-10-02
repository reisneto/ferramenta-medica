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
    args: {
        suggestion: {
            title: 'Formulário TC6M',
            description:
                'O teste médico TC6M avalia a capacidade funcional e tolerância ao esforço em pacientes com doenças respiratórias, cardiovasculares ou neuromusculares, por meio de uma caminhada de 6 minutos. É usado para monitorar a progressão da doença e ajustar o tratamento.',
            likes: 87,
        },
    },
};
