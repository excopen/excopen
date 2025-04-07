import {FC, ReactNode} from "react";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {AuthProvider} from "./AuthProvider.tsx";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {ApiKeys} from "@/app/config.ts";

const queryClient = new QueryClient()

export const AppProvider:FC<{children: ReactNode}> = ({children}) => {
    return(
        <GoogleOAuthProvider clientId={ApiKeys.GOOGLE_CLIENT_ID}>
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