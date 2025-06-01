import {FC} from "react";
import {Tag} from "@/entities";
import {AppSkeleton} from "@/shared/ui";
import {useEditContext} from "@/features";
import s from "./style.module.css"

export const EditReqs: FC = () => {

    const {
        tags,
        myTags,
        isTagsLoading,
        isPlaceholderTags,
        isErrorTags,
        addTag, removeTag
    } = useEditContext()

    if (isTagsLoading || isPlaceholderTags) return <AppSkeleton/>
    if (isErrorTags) return null

    return (
        <div className={s.tagsContainer}>
            <h2 className={s.tagsHeading}>Любимые темы экскурсии:</h2>
            <p className={s.tagsDesc}>
                Набор ваших предпочтений,
                которые мы сформировали на основе поисковых запросов и посещенных экскурсий.
                Всегда можно указать другие!
            </p>
            <div className={s.tagsList}>
                {tags.map((tag, i) => (
                    <Tag
                        key={i}
                        value={myTags}
                        tag={tag}
                        add={addTag}
                        remove={removeTag}
                        variant={"outline"}
                    />
                ))}
            </div>
        </div>
    );
};