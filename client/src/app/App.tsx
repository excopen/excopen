import { Route, Routes } from "react-router-dom";
import { routes } from "./providers/routes";
import {useUserContext} from "@/app/providers/context";

function App() {

    const { role, isAuth } = useUserContext();

    return (
        <Routes>
            {routes.map((route, index) => (
                route.isPrivate && !isAuth ? null : (
                    route.userRole.includes(role) ? (
                        <Route key={index} path={route.path} element={route.element}>
                            {route.children?.map((childRoute, childIndex) => (
                                childRoute.isPrivate && !isAuth ? null : (
                                    childRoute.userRole.includes(role) ? (
                                        <Route
                                            key={`${index}-${childIndex}`}
                                            path={childRoute.path}
                                            element={childRoute.element}
                                        />
                                    ) : null
                                )
                            ))}
                        </Route>
                    ) : null
                )
            ))}
        </Routes>
    );
}

export default App;