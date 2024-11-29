import {FC} from "react";
import {Link} from "react-router-dom";
import {Button} from "@/shared/ui";
import {Orientation} from "@/shared/types";

type SearchButtonProps = {
    path: string
    disabled: boolean
    orientation: Orientation
}

export const SearchButton: FC<SearchButtonProps> = ({path, disabled, orientation}) => {

    return (
        !disabled ? (
            <Button size={orientation === Orientation.HORIZONTAL ? "default" : "lg"} disabled={true}>
                Искать
            </Button>
        ) : (
            <Link to={`/${path}`}>
                <Button size={orientation === Orientation.HORIZONTAL ? "default" : "lg"}>
                    Искать
                </Button>
            </Link>
        )
    );

};