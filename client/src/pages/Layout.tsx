import {Outlet} from "react-router-dom"
import {FC} from "react";
import {Breadcrumbs, Footer, Header} from "@/widgets";
import {LayoutContainer, MainContainer} from "@/shared/conponents";

export const Layout: FC = () => {
    return (
        <LayoutContainer>
            <Header/>
            <MainContainer>
                <Breadcrumbs/>
                <Outlet/>
            </MainContainer>
            <Footer/>
        </LayoutContainer>
    );
};