import {FC, useState} from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger, AppSkeleton, TourPagination} from "@/shared/ui";
import {ReviewForm, TourCard, useContributorTours} from "@/entities";
import {IUser, UserRole} from "@/shared/types";
import {useAuthContext} from "@/features";
import {TourMetrics} from "@/widgets";

export const Index: FC = () => {

    const {user} = useAuthContext()

    const {
        data: myTours,
        isLoading: isMyTourLoading,
        isError: isMyTourError,
        isEmpty: isMyTourEmpty
    } = useContributorTours(user?.id as number)

    const [visibleTours, setVisibleTours] = useState<number>(3)

    return (
        <Accordion type={"single"} collapsible>
            {
                user?.role === UserRole.contributor && (!isMyTourError || !isMyTourEmpty) &&
                <AccordionItem value={"value 1"}>
                    <AccordionTrigger>Ваши популярные экскурсии</AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-4"}>
                        {
                            isMyTourLoading ?
                                <AppSkeleton/> :
                                myTours.slice(0, visibleTours).map(
                                    tour => (
                                        <div key={tour.id} className={"flex flex-col lg:flex-row gap-4"}>
                                            <TourCard tour={tour}/>
                                            <TourMetrics
                                                tour={tour}
                                                users={tour.registered as IUser[]}
                                                capacity={tour.groupCapacity}
                                            />
                                        </div>
                                    )
                                )
                        }
                        <TourPagination
                            visiable={visibleTours}
                            setVisible={setVisibleTours}
                            maxLength={myTours.length}
                        />
                    </AccordionContent>
                </AccordionItem>
            }
            {
                user?.orders.length !== 0 &&
                <AccordionItem value={"value 2"}>
                    <AccordionTrigger>Оцените экскурсии</AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-4"}>
                        {
                            user?.orders.slice(0, visibleTours).map(order => (
                                <ReviewForm type={"create"} key={order.tour.id} tour={order.tour}/>
                            ))
                        }
                    </AccordionContent>
                </AccordionItem>
            }
        </Accordion>
    );
};