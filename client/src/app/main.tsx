import { createRoot } from 'react-dom/client'
import App from './App.tsx';
import "../shared/style/index.css";

import {AuthProvider} from "@/app/providers/context";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <AuthProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </AuthProvider>
)