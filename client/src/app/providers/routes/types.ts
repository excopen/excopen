import {ReactNode} from "react";
import {UserRole} from "@/shared/types";

export interface IRoute {
    path: string
    element: ReactNode | null
    userRole: UserRole[]
    isPrivate: boolean
    children?: IRoute[]
}