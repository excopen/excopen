import {FC} from "react";
import {
    Button,
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger, MyInfoInput
} from "@/shared/ui";
import {useCreateTour} from "@/shared/hooks";
import {useMe} from "@/features";
import {UserRole} from "@/shared/types";
import {Phone} from "@/features/auth/ui/Phone.tsx";
import {useAuthGuide} from "@/features/auth/hooks";
import {Speech} from "lucide-react";

export const AuthGuideDialog: FC = () => {

    const {me} = useMe()
    const {click} = useCreateTour()

    const {
        isOpen,
        info,
        isDisabled,
        isPending,
        setIsOpen, setIsCorrectedPhone, setIsCorrectedInfo, setInfo, setPhone, load
    } = useAuthGuide()

    if (me.role === UserRole.guide) return (
        <Button className={"w-full"} onClick={click}>
            Предложить экскурсию
        </Button>
    )

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger className={"w-full"} asChild>
                <Button className={"w-full"}>
                    Предложить экскурсию
                </Button>
            </DialogTrigger>
            <DialogContent className={"max-w-80 md:max-w-[425px]"}>
                <DialogHeader>
                    <DialogTitle className={"flex flex-row gap-2 items-center max-md:justify-center"}>
                        <Speech width={24} height={24} className={"text-grayscale-500"}/>
                        Станьте гидом!
                    </DialogTitle>
                    <DialogDescription>
                        Зарегистрируйтесь как контрибьютер (гид) в нашем приложении,
                        чтобы у вас была возможность добавлять сови собственные экскурсии.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className={"grid gap-2 w-full"}>
                        <span className={"text-grayscale-400 text-sm"}>Номер телефона</span>
                        <Phone
                            setIsDisabled={setIsCorrectedPhone}
                            setPhone={setPhone}
                        />
                    </div>
                    <div className={"grid gap-2 w-full"}>
                        <MyInfoInput
                            defaultValue={info}
                            updateInfo={setInfo}
                            setIsDisabled={setIsCorrectedInfo}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant={"outline"}>Назад</Button>
                    </DialogClose>
                    <Button
                        onClick={load}
                        disabled={isDisabled}
                    >
                        {isPending ? "Загружаем" : "Стать гидом"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};