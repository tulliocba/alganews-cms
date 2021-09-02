import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;
    border: 1px solid ${transparentize(0.9, '#274060')};
    padding: 20px;
    width: 640px;
`;