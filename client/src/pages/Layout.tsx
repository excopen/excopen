import {Outlet} from "react-router-dom"
import {FC} from "react";

export const Layout: FC = () => {
    return (
        <div>

            <header>
                Header
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>
                footer
            </footer>

        </div>
    );
};