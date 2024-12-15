import {FC} from "react";
import {Link} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import favourite from "@/shared/assets/icons/favourite-secondary.svg";
import next from "@/shared/assets/icons/next-secondary.svg";
import {Button} from "@/shared/ui";

export const ToFavButton: FC = () => {
    return (
        <Button className={"max-lg:hidden"} variant={"secondary"} size={"md"}>
            <img
                height={24}
                width={24}
                alt={"favourite"}
                src={favourite}
            />
            Избранное
            <Link to={`/${RouteNames.FAVOURITES}`}>
                <img
                    height={20}
                    width={20}
                    alt={"arrow"}
                    src={next}
                />
            </Link>
        </Button>
    );
};