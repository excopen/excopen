import { useEffect, useState } from "react";

type ReturnType = {
    isLoginAllowed: boolean;
    setIsLoginAllowed: (value: boolean) => void;
    isLoaded: boolean;
};

const STORAGE_KEY = "isLoginAllowed";

export const useLoginPermission = (): ReturnType => {
    const [isLoginAllowed, setIsLoginAllowed] = useState<boolean>(true);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved !== null) {
                setIsLoginAllowed(saved === "true");
            }
        } catch (err) {
            console.error("Failed to read localStorage:", err);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (!isLoaded) return;
        try {
            localStorage.setItem(STORAGE_KEY, String(isLoginAllowed));
        } catch (err) {
            console.error("Failed to save to localStorage:", err);
        }
    }, [isLoginAllowed, isLoaded]);

    return { isLoginAllowed, setIsLoginAllowed, isLoaded }

}