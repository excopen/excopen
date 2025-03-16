import {FC, useState} from "react";
import {TourCard, useTours} from "@/entities";
import {TourPagination} from "@/shared/ui";
import {Header} from "./header";

export const Index: FC = () => {

    const {data: tours} = useTours()
    const [visible, setVisible] = useState<number>(3)

    return (
        <div className={"w-full flex flex-col gap-8"}>
            <Header/>
            {tours.length > 0 ? (
                tours.slice(0, visible).map(tour => <TourCard key={tour.id} tour={tour} />)
            ) : (
                <p className={"text-center text-gray-500"}>Экскурсии не найдены</p>
            )}
            <TourPagination visiable={visible} setVisible={setVisible} maxLength={tours.length}/>
        </div>
    );
};