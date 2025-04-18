import {FC, useState} from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger, TourPagination} from "@/shared/ui";
import {ReviewForm, TourCard} from "@/entities";
import {IMe, UserRole} from "@/shared/types";
import {useAuthContext} from "@/features";
import {TourMetrics} from "@/widgets";

export const Index: FC = () => {

    const {user} = useAuthContext()
    const [visibleTours, setVisibleTours] = useState<number>(3)

    return (
        <Accordion type={"single"} collapsible>
            {
                user?.role === UserRole.contributor && (user.tours.length !== 0) &&
                <AccordionItem value={"value 1"}>
                    <AccordionTrigger>Ваши популярные экскурсии</AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-4"}>
                        {
                            user.tours.slice(0, visibleTours).map(
                                tour => (
                                    <div key={tour.id} className={"flex flex-col lg:flex-row gap-4"}>
                                        <TourCard tour={tour}/>
                                        <TourMetrics
                                            tour={tour}
                                            users={tour.registered as IMe[]}
                                            capacity={tour.groupCapacity}
                                        />
                                    </div>
                                )
                            )
                        }
                        <TourPagination
                            visiable={visibleTours}
                            setVisible={setVisibleTours}
                            maxLength={user.tours.length}
                        />
                    </AccordionContent>
                </AccordionItem>
            }
            {
                user.orders.length !== 0 &&
                <AccordionItem value={"value 2"}>
                    <AccordionTrigger>Оцените экскурсии</AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-4"}>
                        {
                            user.orders.slice(0, visibleTours).map(order => (
                                <ReviewForm type={"create"} key={order.tour.id} tour={order.tour}/>
                            ))
                        }
                    </AccordionContent>
                </AccordionItem>
            }
        </Accordion>
    );
};