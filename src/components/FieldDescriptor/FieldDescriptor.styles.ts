import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: #274060;

    span.Label {
        font-size: 12px;
        font-weight: 700;
        text-transform: lowercase;
    }

    span.Value {
        font-size: 14px;
    }
`;