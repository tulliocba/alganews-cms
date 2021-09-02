import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;
    background-color: #F3F8FA;
    width: 270px;
`

export const ConfirmTitle = styled.h2`
    font-size: 18px;
    font-weight: 700;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-clamp: 1;
    overflow: hidden;

`;

export const ConfirmDisplayButton = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
`;