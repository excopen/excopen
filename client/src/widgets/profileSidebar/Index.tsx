import {FC} from "react";
import {useAuthContext} from "@/app/context";
import {UserRole} from "@/shared/types";
import {ClientSidebar} from "./clientSidebar";
import {ContributorSidebar} from "./contributorSidebar";
import {GuestSidebar} from "./guestSidebar";

export const Index: FC = () => {
    const {role, isAuth} = useAuthContext()
    return isAuth ? (role === UserRole.client ? <ClientSidebar /> : <ContributorSidebar />) : <GuestSidebar />
};