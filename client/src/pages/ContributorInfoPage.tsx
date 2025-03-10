import {FC, useEffect} from "react";
import {ContributorLayout, useContributor} from "@/entities";
import {useParams} from "react-router-dom";

export const ContributorInfoPage: FC = () => {

    useEffect(() => window.scroll(0,0), [])

    const {id } = useParams<{ id: string, title: string; }>()

    const {data: contributor} = useContributor(Number(id))

    return <ContributorLayout contributor={contributor}/>

};