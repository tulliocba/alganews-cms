import { Message, SadFace, Wrapper } from "./NoData.styles";

export interface NoDataProps {
    height?: number;
}

export const NoData = ({ height = 120 }: NoDataProps) => {
    return (
        <Wrapper height={height}>
            <Message>Sem dados para exibir</Message>
            <SadFace>:(</SadFace>
        </Wrapper>
    );
}