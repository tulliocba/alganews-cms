import styled from "styled-components";
import { Wrapper as Button } from "../Button/Button.styles";

export const Wrapper = styled.div``;

export const Input = styled.input`
    display: none;
`;

export const Label = styled.label`
    background-color: #09f;
    color: #fff;

    padding: 24px;

    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 12px;
`;

export const ImagePreview = styled.div<{ preview: string }>`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    background-image: url(${props => props.preview});
    background-position: center;
    background-size: cover;
`;

export const ImagePreviewWrapper = styled.div`
    background-color: #274060;
    height: 240px;

    ${Button} {
        display: none;
    }

    &:hover {
        ${ImagePreview} {
            opacity: 0.7;
        }

        ${Button} {
            display: block;
        } 
    }
`;

