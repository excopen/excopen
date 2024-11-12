import {FC, ReactNode} from "react";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./AuthProvider.tsx";
import {SearchTourProvider} from "./SearchTourProvider.tsx";

export const AppProvider:FC<{children: ReactNode}> = ({children}) => {
    return(
        <AuthProvider>
            <SearchTourProvider>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </SearchTourProvider>
        </AuthProvider>
    )
}