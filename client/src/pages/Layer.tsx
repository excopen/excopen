import {Outlet} from "react-router-dom"

const Layer = () => {
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

export default Layer;