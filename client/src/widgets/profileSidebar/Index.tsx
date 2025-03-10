import {FC} from "react";
import {useAuthContext} from "@/app/context";
import {UserRole} from "@/shared/types";
import {ClientSidebar} from "./clientSidebar";
import {ContributorSidebar} from "./contributorSidebar";
import {useUser} from "@/entities/user/model";

export const Index: FC = () => {

    const {role, userId} = useAuthContext()
    const {data: user} = useUser(userId)

    if (role === UserRole.client) {
        return (
            <ClientSidebar
                name={user.name}
                avatar={user.avatar}
            />
        )
    }

    return (
        <ContributorSidebar
            name={user.name}
            avatar={user.avatar}
            description={user.description as string}
        />
    )

};