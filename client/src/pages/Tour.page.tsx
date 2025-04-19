import {FC} from "react";
import {Carousel, Description, Header, Sidebar, Tags, useTour} from "@/entities";
import {useParams} from "react-router-dom";
import {AppSkeleton} from "@/shared/ui";

export const TourPage: FC = () => {

    const {id } = useParams<{ id: string, title: string }>()
    const {data: tour, isLoading} = useTour(Number(id))

    /*
    TODO обновить когда заработает сервер
    if (isFallback || isError) return (
        <NotFound
            heading={"Экскурсия не найдена"}
            text={"Возникла проблема с поиском экскурсии"}
        />
    )
     */

    if (isLoading) return <AppSkeleton/>

    return (
        <div className={"flex flex-col justify-between py-12 huge:w-[1440px]"}>
            <Tags tags={tour.tags}/>
            <Header tour={tour}/>
            <Carousel
                images={tour.images as string[]}
                coordinates={tour.coordinates}
            />
            <div className={"flex flex-col lg:flex-row"}>
                <Description tour={tour}/>
                <Sidebar tour={tour}/>
            </div>
        </div>
    )

}