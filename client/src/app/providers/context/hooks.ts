import {useContext} from "react";
import {UserContext} from "./userContext.tsx";
import {IUserContext} from "./types.ts";

export const useUserContext = (): IUserContext => {
    const context = useContext(UserContext);
    if (!context) throw new Error("Context error!");
    return context;
};