import {FC, useState} from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger, TourPagination} from "@/shared/ui";
import {ReviewForm, TourCard} from "@/entities";
import {UserObject} from "@/shared/assets/tempData/UserObject.ts";
import {useAuthContext} from "@/app/context";
import {UserRole} from "@/shared/types";
import {ToursArray} from "@/shared/assets/tempData/ToursArray.ts";

export const Index: FC = () => {

    const {role} = useAuthContext()

    // TODO получение списка экскурсий пользователя
    // TODO добавить эндпойнт для получения списка экскурсий определенного контрибьютера

    const [visibleTours, setVisibleTours] = useState<number>(
        3
    )

    return (
        <Accordion type={"single"} collapsible>
            {
                role === UserRole.contributor &&
                <AccordionItem value={"value 1"}>
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
            }
            <AccordionItem value={"value 2"}>
                <AccordionTrigger>Оцените экскурсии</AccordionTrigger>
                <AccordionContent className={"flex flex-col gap-4"}>
                    {
                        UserObject.visitedTours
                            .slice(0, visibleTours)
                            .map(tour => <ReviewForm key={tour.id} tour={tour}/>)
                    }
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};