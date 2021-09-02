import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const SvgWrapper = styled.div<{ width: number, height: number }>`
    position: relative;
    width: ${props => props.width};
    height: ${props => props.height};

    &:not(:last-child) {
        margin-bottom: 16px;
    }
`;

export const Svg = styled.svg`
    transform: rotate(90deg);
`;

export const Cicle = styled.circle`
    transition: stroke-dashoffset 850ms ease;
`;

export const CicleBG = styled.circle.attrs({
    fill: '#fff',
})``;

export const Percentage = styled.span<{color: string}>`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    color: ${props => props.color};

    font-weight: 900;
    font-size: 1.2em;
`;

export const Caption = styled.span`
    font-size: 1em;
    font-weight: 400;
    text-transform: lowercase;
    color: #274060;

`;