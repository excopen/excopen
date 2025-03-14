import {FC} from "react";
import {Button} from "@/shared/ui";
import {ITag} from "@/shared/types";

type TagProps = {
    id: number
    name: string
    selectedTags: ITag[]
    setSelectedTags: (value: ITag[]) => void
}

export const Index: FC<TagProps> = ({id, name, selectedTags, setSelectedTags}) => {

    const isSelected: boolean = selectedTags.some(tag => tag.id === id)

    const clickHandler = () => {
        if (!isSelected) setSelectedTags([...selectedTags, {id, name}])
        else setSelectedTags(selectedTags.filter(tag => tag.id !== id))
    }

    return (
        <Button
            onClick={clickHandler}
            className={isSelected ? "bg-primary-0" : "bg-grayscale-300"}
            variant={"secondary"}
            size={"md"}
        >
            {name}
        </Button>
    );
};