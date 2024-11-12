import {Outlet} from "react-router-dom"
import {FC} from "react";
import {Breadcrumbs, Footer, Header} from "@/widgets";

export const Layout: FC = () => {
    return (
        <div>
            <Header/>
            <main>
                <Breadcrumbs/>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};