import {FC} from "react";
import {Container} from "@/widgets/tourSidebar/ui/item/Container.tsx";
import {Option} from "@/widgets/tourSidebar/ui/item/Option.tsx";
import {Value} from "@/widgets/tourSidebar/ui/item/Value.tsx";

type ItemProps = {
    option: string
    value: string | undefined
}

export const Item: FC<ItemProps> = ({option, value}) => {
    return (
        <Container>
            <Option option={option}/>
            <Value value={value}/>
        </Container>
    );
};