import {FC} from "react";
import {UserRole} from "@/shared/types";
import {ClientSidebar} from "./clientSidebar";
import {ContributorSidebar} from "./contributorSidebar";
import {GuestSidebar} from "./guestSidebar";
import {useAuthContext} from "@/features";

export const Index: FC = () => {
    const {role, isAuth} = useAuthContext()
    return isAuth ? (role === UserRole.client ? <ClientSidebar/> : <ContributorSidebar/>) : <GuestSidebar/>
};