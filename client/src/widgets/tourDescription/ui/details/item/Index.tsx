import {FC} from "react";
import {Container, Content} from "@/widgets/tourDescription/ui/details/item/containers";
import {Heading, Image} from "@/widgets/tourDescription/ui/details/item/components";

type ItemProps = {
    title: string
    description: string
    image: string
}

export const Item: FC<ItemProps> = ({title, image, description}) => {
    return (
        <Container>
            <Image image={image}/>
            <Content>
                <Heading title={title}/>
                <p>{description}</p>
            </Content>
        </Container>
    );
};