import {AppRoutes} from "@/app/routing";
import {StrictMode} from "react";
import {useAddManyFavFactory, useFirstLoad} from "@/features";

export const App = () => {

    useFirstLoad()
    useAddManyFavFactory()

    return (
        <StrictMode>
            <AppRoutes/>
        </StrictMode>
    )
};