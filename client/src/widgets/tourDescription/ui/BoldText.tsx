import {FC} from "react";

type BoldTextProps = {
    value: string
}

export const BoldText: FC<BoldTextProps> = ({value}) => {
    return (
        <h2 className={"font-medium"}>
            {value}
        </h2>
    );
};