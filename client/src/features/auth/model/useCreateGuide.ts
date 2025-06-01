import {useMutation} from "@tanstack/react-query";
import {GuideDto} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {createGuide} from "@/features/auth/api";

export const useCreateGuide = () => {
    return useMutation<void, ApiException<GuideDto>, GuideDto>({
        mutationFn: (dto) => createGuide(dto),
        onError: (e: ApiException<GuideDto>) => console.log("Не удалось авторизовать гида", e.message),
        retry: 3
    })
}