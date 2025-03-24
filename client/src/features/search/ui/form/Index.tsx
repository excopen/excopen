import {FC} from "react";
import {useWindowSize} from "usehooks-ts";
import {Orientation} from "@/shared/types";

import {SearchButton} from "./button";
import {Container, Header} from "./containers";
import {Input} from "./input"
import {DatePicker} from "./datePicker";
import {Select} from "./select";
import {Switch} from "./switch";

type FormProps = {
    orientation: Orientation
}

export const Index: FC<FormProps> = ({orientation}) => {

    const {width} = useWindowSize()
    
    return (
        <Container orientation={orientation}>
            <Header orientation={orientation}>
                <Input/>
                <DatePicker/>
                <Select/>
                {width < 1440 || orientation === Orientation.VERTICAL && <Switch orientation={orientation}/>}
                <SearchButton orientation={orientation}/>
            </Header>
            {orientation === Orientation.HORIZONTAL && width > 1440 && <Switch orientation={orientation}/>}
        </Container>
    );
};