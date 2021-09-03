import { ReactNode } from "react";
import { Logo } from "../../../app/components/Logo";
import NavBar from "../../../app/components/NavBar";
import { SessionController } from "../../../app/components/SessionController";
import confirm from "../../../core/utils/confirm";
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
                        onLogout={() => { 
                            confirm({
                                title: "Você tem certeza que quer deslogar?",
                                onConfirm: () => window.alert('Layout confirm'),
                                onCancel: () => window.alert('Layout cancel')
                            })
                        }}
                    />
                </Aside>
            </Main>
        </Wrapper>
    );
}