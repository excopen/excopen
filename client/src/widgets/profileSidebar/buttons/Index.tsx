import {FC} from "react";
import {Link} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {Button, SidebarButton} from "@/shared/ui";
import favourite from "@/shared/assets/icons/favourite-secondary.svg";
import {useCreateTour} from "@/shared/hooks";

export const Index: FC = () => {

    const {click} = useCreateTour()

    return (
        <>
            <Link className={"w-full"} to={`/${RouteNames.FAVOURITES}`}>
                <SidebarButton image={favourite} label={"Избранное"}/>
            </Link>
            <Button className={"w-full"} onClick={click}>
                Предложить экскурсию
            </Button>
        </>
    );
};