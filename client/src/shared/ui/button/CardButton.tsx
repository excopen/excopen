import {FC} from "react";
import {Link} from "react-router-dom";
import {Button} from "@/shared/ui";

export const CardButton: FC = () => {

    // route to page tour

    return (
        <Link to={"/"}>
            <Button>Выбрать</Button>
        </Link>
    );
};