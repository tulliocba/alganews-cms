import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #F3F8FA;
    display: flex;
    padding: 24px;
    align-items: center;
    justify-content: center;
    width: 373px;
    border: 1px solid ${transparentize(0.9, '#274060')}

`;

export const InfoInnerContent = styled.div`
    display: flex;
    gap: 24px;
    color: #274060;
`;

export const InfoIcon = styled.div``;

export const InfoMessages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const InfoTitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-clamp: 1;
    overflow: hidden;
`;