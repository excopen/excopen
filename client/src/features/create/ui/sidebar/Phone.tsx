import {FC, useRef} from "react";
import {observer} from "mobx-react-lite";
import {usePhone} from "@/shared/hooks";
import {createTourStore} from "@/features/createTour/store";
import {useOnClickOutside} from "usehooks-ts";
import {PhoneInput} from "@/shared/ui";

export const Phone: FC = observer(() => {

    const {
        isSubmitted,
        value,
        state,
        click, clear, close, focus, blur
    } = usePhone(createTourStore)

    const inputRef = useRef<HTMLInputElement>(null)
    useOnClickOutside(inputRef,close)

    return (
        <PhoneInput
            ref={inputRef}
            isSubmitted={isSubmitted}
            field={state}
            value={value}
            label={"Номер телефона"}
            onClear={clear}
            onChangeCapture={click}
            onFocus={focus}
            onBlur={blur}
        />
    );
})