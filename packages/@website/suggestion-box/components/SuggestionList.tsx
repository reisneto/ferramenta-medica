import styled from '@emotion/styled';
import { SuggestionCard } from './SuggestionCard';

interface Props {
    suggestions: {
        title: string;
        description: string;
        likes: number;
    }[];
}

export const SuggestionList: React.FC<Props> = (props) => {
    return (
        <Container>
            {props.suggestions.map((suggestion, index) => (
                <SuggestionCard key={index} suggestion={suggestion} />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;
