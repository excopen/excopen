import {FC} from "react";
import {ContributorLayout, useContributor} from "@/entities";
import {useParams} from "react-router-dom";

export const ContributorPage: FC = () => {

    const {id} = useParams<{ id: string, title: string; }>()
    const {data: contributor} = useContributor(Number(id))

    return <ContributorLayout contributor={contributor}/>

};