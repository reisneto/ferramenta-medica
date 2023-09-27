import { Meta, StoryObj } from '@storybook/react';
import { SuggestionList } from '../packages/@website/suggestion-box/components/SuggestionList';

const meta: Meta<typeof SuggestionList> = {
    title: 'Suggestion/List',
    component: SuggestionList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SuggestionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        suggestions: [
            {
                title: 'Formulário TC6M',
                description:
                    'O teste médico TC6M avalia a capacidade funcional e tolerância ao esforço em pacientes com doenças respiratórias, cardiovasculares ou neuromusculares, por meio de uma caminhada de 6 minutos. É usado para monitorar a progressão da doença e ajustar o tratamento.',
                likes: 87,
            },
            {
                title: 'Formulário TC6M',
                description:
                    'O teste médico TC6M avalia a capacidade funcional e tolerância ao esforço em pacientes com doenças respiratórias, cardiovasculares ou neuromusculares, por meio de uma caminhada de 6 minutos. É usado para monitorar a progressão da doença e ajustar o tratamento.',
                likes: 87,
            },
            {
                title: 'Formulário TC6M',
                description:
                    'O teste médico TC6M avalia a capacidade funcional e tolerância ao esforço em pacientes com doenças respiratórias, cardiovasculares ou neuromusculares, por meio de uma caminhada de 6 minutos. É usado para monitorar a progressão da doença e ajustar o tratamento.',
                likes: 87,
            },
            {
                title: 'Formulário TC6M',
                description:
                    'O teste médico TC6M avalia a capacidade funcional e tolerância ao esforço em pacientes com doenças respiratórias, cardiovasculares ou neuromusculares, por meio de uma caminhada de 6 minutos. É usado para monitorar a progressão da doença e ajustar o tratamento.',
                likes: 87,
            },
            {
                title: 'Formulário TC6M',
                description:
                    'O teste médico TC6M avalia a capacidade funcional e tolerância ao esforço em pacientes com doenças respiratórias, cardiovasculares ou neuromusculares, por meio de uma caminhada de 6 minutos. É usado para monitorar a progressão da doença e ajustar o tratamento.',
                likes: 87,
            },
        ],
    },
};
