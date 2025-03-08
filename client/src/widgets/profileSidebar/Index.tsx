import {FC} from "react";
import {useAuthContext} from "@/app/context";
import {UserRole} from "@/shared/types";
import {ContributorObject} from "@/shared/assets/tempData/ContributorObject.ts";
import {ClientSidebar} from "./clientSidebar";
import {ContributorSidebar} from "./contributorSidebar";

export const Index: FC = () => {

    const {role} = useAuthContext()

    if (role === UserRole.client) {
        return (
            <ClientSidebar
                name={ContributorObject.name}
                avatar={ContributorObject.avatar}
            />
        )
    }

    return (
        <ContributorSidebar
            name={ContributorObject.name}
            avatar={ContributorObject.avatar}
            description={ContributorObject.description}
        />
    )

};