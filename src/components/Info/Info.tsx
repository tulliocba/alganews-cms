import { mdiInformation } from "@mdi/js";
import Icon from "@mdi/react";
import { Wrapper, InfoInnerContent, InfoIcon, InfoMessages, InfoTitle } from "./Info.styles";

export interface InfoProps {
    title: string;
    description: string;
}

export const Info = ({ title, description }: InfoProps) => {
    return (
        <Wrapper>
            <InfoInnerContent>
                <InfoIcon>
                    <Icon
                        color="#09f"
                        size="48px"
                        path={mdiInformation}
                    />
                </InfoIcon>
                <InfoMessages>
                    <InfoTitle>{title}</InfoTitle>
                    <p>{description}</p>
                </InfoMessages>
            </InfoInnerContent>
        </Wrapper>
    );
}

