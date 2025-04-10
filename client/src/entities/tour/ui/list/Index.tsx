import {FC, useState} from "react";
import {TourCard, useTours} from "@/entities";
import {AppSkeleton, NotFound, TourPagination} from "@/shared/ui";
import {Header} from "./header";

export const Index: FC = () => {

    const {data: tours, isEmpty , isError, hasData, isLoading} = useTours()
    const [visible, setVisible] = useState<number>(3)

    if (isEmpty || isError) return (
        <NotFound
            heading={"Экскурсии не найдены"}
            text={"Измените парметры поиска или воспользуйтесь сервисом чуть позже"}
        />
    )

    return (
        <div className={"w-full flex flex-col gap-8"}>
            <Header/>
            {
                hasData || !isLoading ?
                    tours.slice(0, visible).map(tour => <TourCard key={tour.id} tour={tour}/>) :
                    <AppSkeleton/>
            }
            {hasData && <TourPagination visiable={visible} setVisible={setVisible} maxLength={tours.length}/>}
        </div>
    )
};