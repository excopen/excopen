import {FC} from "react";
import {TourLayout, useTour} from "@/entities";
import {useParams} from "react-router-dom";

export const TourPage: FC = () => {

    const {id } = useParams<{ id: string, title: string }>()
    const {data: tour, isLoading, isError} = useTour(Number(id))

    if (!tour || isError) return <div>Экскурсия не найдена</div>
    if (isLoading) return <div>Данные загружаются...</div>
    return <TourLayout tour={tour}/>

}