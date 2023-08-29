import styled from '@emotion/styled';
import { TextareaAutosize } from '@mui/material';

export const TextArea = styled(TextareaAutosize)`
    padding: ${(props) => props.theme.spacing(2)};
`;
