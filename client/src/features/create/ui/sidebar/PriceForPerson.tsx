import {FC, useRef} from "react";
import {PriceInput} from "@/shared/ui";
import {usePrice} from "@/shared/hooks";
import {createTourStore} from "@/features/createTour/store";
import {useOnClickOutside} from "usehooks-ts";
import {observer} from "mobx-react-lite";

export const PriceForPerson: FC = observer(() => {

    const {
        isSubmitted,
        value,
        state,
        clear, focus, blur, click,close
    } = usePrice(createTourStore, "priceForPerson")

    const inputRef = useRef<HTMLInputElement>(null)
    useOnClickOutside(inputRef,close)

    return (
        <PriceInput
            ref={inputRef}
            isSubmitted={isSubmitted}
            field={state}
            value={value}
            label={"Цена за одного человека"}
            onClear={clear}
            onChangeCapture={click}
            onFocus={focus}
            onBlur={blur}
        />
    );
})