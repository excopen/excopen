import {FC, useState} from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger, TourPagination} from "@/shared/ui";
import {ReviewForm, TourCard, useContributorTours} from "@/entities";
import {UserRole} from "@/shared/types";
import {useUser} from "@/entities/user/model";
import {useAuthContext} from "@/features";

export const Index: FC = () => {

    const {role, userId} = useAuthContext()

    const {data: user} = useUser(userId)
    const {data: myTour} = useContributorTours(userId)

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
                        {myTour.slice(0, visibleTours).map(tour => <TourCard key={tour.id} tour={tour}/>)}
                        <TourPagination
                            visiable={visibleTours}
                            setVisible={setVisibleTours}
                            maxLength={myTour.length}
                        />
                    </AccordionContent>
                </AccordionItem>
            }
            <AccordionItem value={"value 2"}>
                <AccordionTrigger>Оцените экскурсии</AccordionTrigger>
                <AccordionContent className={"flex flex-col gap-4"}>
                    {
                        user.visitedTours
                            .slice(0, visibleTours)
                            .map(tour => <ReviewForm key={tour.id} tour={tour}/>)
                    }
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};