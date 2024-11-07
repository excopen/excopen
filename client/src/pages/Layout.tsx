import {Outlet} from "react-router-dom"
import {FC} from "react";
import {BreadcrumbWidget, Footer, Header} from "@/widgets";

export const Layout: FC = () => {
    return (
        <div>
            <Header/>
            <main>
                <BreadcrumbWidget/>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};