import { ReactNode } from "react";
import NavBar from "../../app/components/NavBar";
import { Aside, FeaturedContent, Header, Main, Navigation, Wrapper } from "./Default.styles";

export interface DefaultLayoutProps {
    children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <Wrapper>
            <Header>Header</Header>
            <Main>
                <Navigation>
                    <NavBar />
                </Navigation>
                <FeaturedContent>
                    {children}
                </FeaturedContent>
                <Aside>
                    aside
                </Aside>
            </Main>
        </Wrapper>
    );
}