import { googleLogout } from '@react-oauth/google';

export const useGoogleSignOut = () => {
    const signOut = () => googleLogout()
    return { signOut }
}