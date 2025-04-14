import {FC, useState} from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger, TourPagination} from "@/shared/ui";
import {ReviewForm, TourCard, useContributorTours} from "@/entities";
import {IUser, UserRole} from "@/shared/types";
import {useUser} from "@/entities/user/model";
import {useAuthContext} from "@/features";
import {TourMetrics} from "@/widgets";

export const Index: FC = () => {

    const {role, userId} = useAuthContext()

    const {data: user} = useUser(userId)
    const {data: myTours} = useContributorTours(userId)

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
                        {myTours.slice(0, visibleTours).map(
                            tour => (
                                <div key={tour.id} className={"flex flex-col lg:flex-row gap-4"}>
                                    <TourCard tour={tour}/>
                                    <TourMetrics tour={tour} users={tour.registered as IUser[]} capacity={tour.groupCapacity}/>
                                </div>
                            )
                        )}
                        <TourPagination
                            visiable={visibleTours}
                            setVisible={setVisibleTours}
                            maxLength={myTours.length}
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