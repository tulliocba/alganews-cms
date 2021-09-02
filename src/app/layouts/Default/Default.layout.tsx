import { ReactNode } from "react";
import { Logo } from "../../../app/components/Logo";
import NavBar from "../../../app/components/NavBar";
import { SessionController } from "../../../app/components/SessionController";
import { Aside, FeaturedContent, Header, Main, Navigation, Wrapper } from "./Default.layout.styles";

export interface DefaultLayoutProps {
    children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <Wrapper>
            <Header>
                <Logo />
            </Header>
            <Main>
                <Navigation>
                    <NavBar />
                </Navigation>
                <FeaturedContent>
                    {children}
                </FeaturedContent>
                <Aside>
                    <SessionController
                        name="Tulio Gabriel"
                        description="Editor a 5 anos"
                        onLogout={() => { }}
                    />
                </Aside>
            </Main>
        </Wrapper>
    );
}