import {FC, ReactNode} from "react";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {AuthProvider} from "./AuthProvider.tsx";
import {GoogleOAuthProvider} from "@react-oauth/google";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID

const queryClient = new QueryClient()

export const AppProvider:FC<{children: ReactNode}> = ({children}) => {
    return(
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <BrowserRouter>
                        {children}
                    </BrowserRouter>
                </AuthProvider>
            </QueryClientProvider>
        </GoogleOAuthProvider>
    )
}