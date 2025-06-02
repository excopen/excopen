import {FC} from "react";
import {UserRole} from "@/shared/types";
import {ClientSidebar as Client} from "./clientSidebar";
import {ContributorSidebar as Guide} from "./contributorSidebar";
import {GuestSidebar, GuestSidebar as Guest} from "./guestSidebar";
import {useMe} from "@/features";
import {SidebarSkeleton} from "@/shared/ui";

export const Index: FC = () => {

    const {
        myRole,
        isLoading,
        isEmpty,
        isFetching,
        isError,
        isRefetching
    } = useMe()

    if (isLoading || (isEmpty && isFetching) || isRefetching) return <SidebarSkeleton/>
    if (isError || (isEmpty && !isFetching)) return <GuestSidebar/>

    switch (myRole) {
        case UserRole.client:
            return <Client/>
        case UserRole.guide:
            return <Guide/>
        case UserRole.guest:
            return <Guest/>
        default:
            return <Guest/>
    }

}