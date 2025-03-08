import {FC, useState} from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger, TourPagination} from "@/shared/ui";
import {TourCard} from "@/entities";
import {ToursArray} from "@/shared/assets/tempData/ToursArray.ts";

export const Index: FC = () => {

    // TODO получение списка экскурсий пользователя
    // TODO добавить эндпойнт для получения списка экскурсий определенного контрибьютера

    const [visibleTours, setVisibleTours] = useState<number>(
        3
    )

    return (
        <Accordion type={"single"} collapsible>
            <AccordionItem value={"value"}>
                <AccordionTrigger>Ваши популярные экскурсии</AccordionTrigger>
                <AccordionContent className={"flex flex-col gap-4"}>
                    {ToursArray.slice(0, visibleTours).map(tour => <TourCard key={tour.id} tour={tour}/>)}
                    <TourPagination
                        visiable={visibleTours}
                        setVisible={setVisibleTours}
                        maxLength={ToursArray.length}
                    />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};