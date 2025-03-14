import {FC} from "react";
import {Link} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {Button, SidebarButton} from "@/shared/ui";
import favourite from "@/shared/assets/icons/favourite-secondary.svg";

export const Index: FC = () => {
    return (
        <>
            <Link to={`/${RouteNames.FAVOURITES}`}>
                <SidebarButton image={favourite} label={"Избранное"}/>
            </Link>
            <Button>Предложить экскурсию</Button>
        </>
    );
};