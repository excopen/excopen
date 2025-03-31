import {FC, useRef} from "react";
import {observer} from "mobx-react-lite";
import {useSocial} from "@/shared/hooks";
import {createTourStore} from "@/features/createTour/store";
import {useOnClickOutside} from "usehooks-ts";
import {SocialInput} from "@/shared/ui";

export const Telegram: FC = observer(() => {

    const {
        isSubmitted,
        value,
        state,
        clear, focus, blur, clickInput,close
    } = useSocial(createTourStore, "telegram")

    const inputRef = useRef<HTMLInputElement>(null)
    useOnClickOutside(inputRef,close)

    return (
        <SocialInput
            ref={inputRef}
            isSubmitted={isSubmitted}
            field={state}
            value={value}
            label={"Аккаунт Telegram"}
            onClear={clear}
            onChangeCapture={clickInput}
            onFocus={focus}
            onBlur={blur}
        />
    );
})