import styled from "styled-components";

export const Wrapper = styled.div<{ height: number }>`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${props => props.height}px;
`;

export const Message = styled.span`
    font-size: 24px;
    font-weight: 700;

    color: #274060;
`;

export const SadFace = styled.span`
    font-family: 'Roboto Mono', monospace;
    color: #0099ff;

    font-weight: 700;
`;