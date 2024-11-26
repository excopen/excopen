import {ContributorButton} from "@/widgets/tourSidebar/ui/contributorButton";
import {Item} from "@/widgets/tourSidebar/ui/item";
import {Rating} from "@/widgets/tourSidebar/ui/rating";
import {Price} from "@/widgets/tourSidebar/ui/price";
import {Container, SubContainer} from "@/widgets/tourSidebar/ui/containers";
import {BookingButton, Separator} from "@/widgets/tourSidebar/ui/components";
import {FC} from "react";
import {ITour} from "@/shared/types";

type TourSidebarProps = {
    tour: ITour
}

export const TourSidebar: FC<TourSidebarProps> = ({tour}) => {
    return (
        <Container>
            <ContributorButton
                name={tour.contributor?.name}
                link={"/"}
            />
            <SubContainer>
                <Item option={"Формат:"} value={tour.format}/>
                <Item option={"Длительность:"} value={tour.duration}/>
                <Item option={"Размер группы:"} value={`${tour.groupCapacity} человек`}/>
                <Item option={"Формат проведения:"} value={tour.formatBehavior}/>
                <Rating option={"Рейтинг:"} rating={tour.rating} ratingCount={tour.ratingCount}/>
                <Separator/>
                <Price price={tour.priceForPerson}/>
                <BookingButton link={"/"}/>
            </SubContainer>
        </Container>
    );
};