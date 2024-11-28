import {FC, useState} from "react";
import {Header} from "@/widgets/tourList/ui/Header.tsx";
import {TourListContainer} from "@/widgets/tourList/ui/TourListContainer.tsx";
import {TourCard} from "@/widgets";
import {Button} from "@/shared/ui";
import {PaginationContainer} from "@/widgets/tourList/ui/PaginationContainer.tsx";
import {ToursArray} from "@/shared/assets/tempData/ToursArray.ts";

export const TourList: FC = () => {

    //const {data} = useTours({})

    const [visibleTours, setVisibleTours] = useState<number>(3)
    const loadTours = () => setVisibleTours(visibleTours => visibleTours + 3)

    return (
        <TourListContainer>
            <Header
                city={"Омск"}
                count={100}
            />
            {ToursArray.slice(0,visibleTours).map(tour => (
                <TourCard key={tour.id} tour={tour}/>
            ))}
            {
                visibleTours < ToursArray.length &&
                <PaginationContainer>
                    <Button onClick={loadTours} variant={"outline"}>
                        Загрузить еще
                    </Button>
                </PaginationContainer>
            }
        </TourListContainer>
    );
};