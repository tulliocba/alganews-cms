import styled from "styled-components";
import { ValueDescriptor } from "../components/ValueDescriptor/ValueDescriptor";

export const UserEarnings = () => {
    return (
        <Wrapper>
            <ValueDescriptor color="primary" description="Ganhos do mês" value={60322.4} isCurrency/>
            <ValueDescriptor color="primary" description="Ganhos na semana" value={1212.4} isCurrency/>
            <ValueDescriptor color="default" description="Ganhos de sempre" value={455667.4} isCurrency/>
            <ValueDescriptor color="default" description="Total de palavras" value={2_345_345} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
`;