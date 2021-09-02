import {Heading1, Heading2, Heading3} from "./Heading.styles";

export interface HeadingProps {
    level: 1 | 2 | 3;
    children: React.ReactNode;
}

export const Heading = ({ level, children }: HeadingProps) => {

    const headers = {
        1: Heading1,
        2: Heading2,
        3: Heading3
    };

    const Header = headers[level];

    return (
        <Header>
            {children}
        </Header>
    );
}