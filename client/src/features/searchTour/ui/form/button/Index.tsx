import {FC} from "react";
import {Button} from "@/shared/ui";
import {Orientation} from "@/shared/types";
import {useButtonState} from "@/features/searchTour/lib";

type SearchButtonProps = {
    orientation: Orientation
}

export const Index: FC<SearchButtonProps> = ({orientation}) => {

    const {click} = useButtonState()

    return (
        <Button
            role={"searchButton"}
            onClick={click}
            size={orientation === Orientation.HORIZONTAL ? "default" : "lg"}
        >
            Искать
        </Button>
    );

};