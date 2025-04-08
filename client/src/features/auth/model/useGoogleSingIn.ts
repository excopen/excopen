import {useMutation} from "@tanstack/react-query";
import {loginWithGoogle} from "@/features/auth/api";
import {UserObject} from "@/shared/assets/tempData/UserObject.ts";
import {TokenResponse, useGoogleLogin} from "@react-oauth/google";

export const useGoogleSingIn = () => {

    const mutation = useMutation({
        mutationFn: async (token: string) => {
            const user = await loginWithGoogle(token)
            // моковые данные уберу в будущем
            return user ??  UserObject
        }
    })

    const login = useGoogleLogin({
        onSuccess: (tokenResponse: TokenResponse) => mutation.mutate(tokenResponse.access_token),
        onError: (error) => console.error("Google login error", error),
    })

    return{
        login,
        ...mutation
    }

}