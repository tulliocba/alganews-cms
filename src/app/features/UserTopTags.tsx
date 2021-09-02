import styled from "styled-components";
import { CircleChart } from "../components/CircleChart";

export const UserTopTags = () => {
    return (
        <Wrapper>
            <CircleChart progress={80} size={88} caption="JavaScript" theme="primary"/>
            <CircleChart progress={20} size={88} caption="Scrum"/>
            <CircleChart progress={50} size={88} caption="Java"/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
`;