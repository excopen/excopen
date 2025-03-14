import {FC, useState} from "react";
import style from "./styles/style.module.css"
import {Text} from "./Text.tsx";
import {cn} from "@/app/lib/utils.ts";
import {Tag, useAddTags, useTags} from "@/entities";
import {ITag, RouteNames} from "@/shared/types";
import {useAuthContext} from "@/app/context";
import {Link} from "react-router-dom";
import {Button} from "@/shared/ui";

export const Index: FC = () => {

    const {userId}  = useAuthContext()
    const {data: tags} = useTags()
    const {mutate: addTags} = useAddTags()

    const [selectedTags, setSelectedTags] = useState<ITag[]>([])

    const disabled: boolean = selectedTags.length === 0

    const clickHandler = () => addTags({userId: userId, tags: selectedTags})

    return (
        <div className={cn(style.container, style.paddings)}>
            <Text/>
            <div className={style.tags}>
                {tags.map(tag => (
                    <Tag
                        key={tag.id}
                        id={tag.id}
                        name={tag.name}
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                    />
                ))}
            </div>
            <div className={style.buttons}>
                <Link to={`/${RouteNames.MAIN}`}>
                    <Button variant={"secondary"} size={"md"}>
                        Не интересно
                    </Button>
                </Link>
                {
                    !disabled ?
                        <Link to={`/${RouteNames.MAIN}`}>
                            <Button onClick={clickHandler} disabled={disabled} size={"md"}>
                                Искать
                            </Button>
                        </Link> :
                        <Button disabled={disabled} size={"md"}>
                            Искать
                        </Button>
                }
            </div>
        </div>
    );
};