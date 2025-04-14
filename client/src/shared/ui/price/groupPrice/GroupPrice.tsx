import {FC} from "react";
import {PriceContainer} from "./PriceContainer.tsx";
import {PriceDescription} from "./PriceDescription.tsx";
import {Price} from "./PriceValue.tsx";

type GroupPriceProps = {
    price: number
}

export const GroupPrice: FC<GroupPriceProps> = ({price}) => {
    return (
        <PriceContainer>
            <PriceDescription/>
            <Price value={price}/>
        </PriceContainer>
    );
};