import {FC} from "react";
import {Button} from "@/shared/ui";
import {useSearchButton} from "@/shared/hooks";
import {createTourStore} from "@/features/createTour/store";

export const SubmitButton: FC = () => {

    const {click} = useSearchButton(createTourStore)

    return (
        <Button role={"searchButton"} onClick={click} size={"lg"}>
            Далее
        </Button>
    );

};