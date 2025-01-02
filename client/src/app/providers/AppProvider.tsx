import {FC, ReactNode} from "react";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./AuthProvider.tsx";
import {SearchTourProvider} from "./SearchTourProvider.tsx";
import {TourViewProvider} from "./TourViewProvider.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

export const AppProvider:FC<{children: ReactNode}> = ({children}) => {
    return(
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <SearchTourProvider>
                    <TourViewProvider>
                        <BrowserRouter>
                            {children}
                        </BrowserRouter>
                    </TourViewProvider>
                </SearchTourProvider>
            </AuthProvider>
        </QueryClientProvider>
    )
}