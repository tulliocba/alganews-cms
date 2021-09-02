import { ReactNode } from "react";
import { Wrapper } from "./Paragraph.styles";

export interface ParagraphProps {
    size?: 'default' | 'small';
    children: ReactNode;
}

export const Paragraph = ({ size = 'default', children }: ParagraphProps) => {
    return (
        <Wrapper size={size}>
            {children}
        </Wrapper>
    );
}