import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {cn} from "@/app/lib/utils.ts";

import {Tag, useReqs} from "@/entities";
import {RouteNames} from "@/shared/types";
import {Button} from "@/shared/ui";

import {Text} from "./Text.tsx";
import style from "./style.module.css"

export const Index: FC = () => {

    const navigate = useNavigate()
    const {tags, selected, disabled, add, remove, click} = useReqs()

    return (
        <div className={cn(style.container, style.paddings)}>
            <Text/>
            <div className={style.tags}>
                {tags.map((tag, index) => (
                    <Tag
                        key={index}
                        value={selected}
                        tag={tag}
                        add={add}
                        remove={remove}
                        variant={"secondary"}
                    />
                ))}
            </div>
            <div className={style.buttons}>
                <Button
                    onClick={() => navigate(`/${RouteNames.MAIN}`)}
                    variant={"secondary"}
                    size={"md"}
                >
                    Не интересно
                </Button>
                <Button
                    onClick={click}
                    disabled={disabled}
                    size={"md"}
                >
                    Искать
                </Button>
            </div>
        </div>
    );
};