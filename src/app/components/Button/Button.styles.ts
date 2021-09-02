import styled from "styled-components";
import { transparentize } from "polished";

const COLORS = {
    red: '#F84735',
    primary: '#0099FF',
    foreground: '#508AC9'
}

const THEME = {
    danger: {
        backgroundColor: '#F84735',
        color: '#FFF',
        onHover: `
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
        `,
        disabled: {
            color: COLORS.red,
            backgroundColor: transparentize(0.75, COLORS.red)
        }
    },
    primary: {
        backgroundColor: '#0099FF',
        color: '#FFF',
        onHover: `
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
        `,
        disabled: {
            color: '#FFF',
            backgroundColor: transparentize(0.44, COLORS.primary)
        }
    },
    text: {
        backgroundColor: 'transparent',
        color: '#274060',
        onHover: `
            border-color: #274060;
        `,
        disabled: {
            color: '#274060',
            backgroundColor: transparentize(0.44, COLORS.foreground)
        }
    }
}

export const Wrapper = styled.button<{
    variant: 'danger' | 'text' | 'primary'
}>`
    padding: 6px 8px 4px;
    border: 1px solid ${props => THEME[props.variant].backgroundColor};

    color: ${props => THEME[props.variant].color};
    background-color: ${props => THEME[props.variant].backgroundColor};

    &:hover,
    &:focus {
        ${props => THEME[props.variant].onHover};
    }

    &:disabled {
        background-color: ${props => THEME[props.variant].disabled.backgroundColor};
        color: ${props => THEME[props.variant].disabled.color};

        pointer-events: none;
        border-color: transparent;
    }
`;