import {FC} from "react";
import {Container} from "@/widgets/tourSidebar/ui/price/Container.tsx";
import {Value} from "@/widgets/tourSidebar/ui/price/Value.tsx";
import {Description} from "@/widgets/tourSidebar/ui/price/Description.tsx";

type PriceProps = {
    price: number
}

export const Price: FC<PriceProps> = ({price}) => {
    return (
        <Container>
            <Value price={price}/>
            <Description/>
        </Container>
    );
};