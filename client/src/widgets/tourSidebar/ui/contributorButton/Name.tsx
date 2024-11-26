import {FC} from "react";

type NameProps = {
    name: string | undefined
}

export const Name: FC<NameProps> = ({name}) => {
    return (
        <span className={"text-xl"}>{name}</span>
    );
};