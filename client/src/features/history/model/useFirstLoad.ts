import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {RouteNames} from "@/shared/types";
import {tourLocalHistoryStore as history, useAuthContext} from "@/features";

export const useFirstLoad = () => {

    const navigate = useNavigate()
    const {isAuth} = useAuthContext()
    const isFirstLoad = history.isFirstLoad

    useEffect(() => {

        if (isFirstLoad && !isAuth) {
            history.visit()
            navigate(`/${RouteNames.ON_BOARDING}`)
        }

    }, [])

}