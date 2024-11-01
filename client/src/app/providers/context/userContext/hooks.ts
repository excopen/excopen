import {useContext} from "react";
import {UserContext} from "./userContext.tsx";
import {UserType} from "./types.ts";

export const useUserContext = (): UserType => {
    const context = useContext(UserContext);
    if (!context) throw new Error("Context error!");
    return context;
};