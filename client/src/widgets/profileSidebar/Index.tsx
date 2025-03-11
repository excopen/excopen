import {FC} from "react";
import {useAuthContext} from "@/app/context";
import {UserRole} from "@/shared/types";
import {ClientSidebar} from "./clientSidebar";
import {ContributorSidebar} from "./contributorSidebar";

export const Index: FC = () => {

    const {role} = useAuthContext()

    if (role === UserRole.client) return <ClientSidebar/>
    return <ContributorSidebar/>

};