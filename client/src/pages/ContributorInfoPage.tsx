import {FC} from "react";
import {ContributorLayout} from "@/entities";
import {ContributorObject} from "@/shared/assets/tempData/ContributorObject.ts";

export const ContributorInfoPage: FC = () => {
    return <ContributorLayout contributor={ContributorObject}/>
};