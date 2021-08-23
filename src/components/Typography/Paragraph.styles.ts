import styled from "styled-components";

export const Wrapper = styled.p<{ size: 'default' | 'small' }>`
    font-size: ${props => props.size === 'default' ? 14 : 12}px;
    line-height: ${props => props.size === 'default' ? 25 : 20}px;
    color: #274060;
`;