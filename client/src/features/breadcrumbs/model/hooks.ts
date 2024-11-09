import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {RouteNames} from "@/shared/types";
import {BreadcrumbType} from "./types.ts";

export const useBreadcrumbs = (): BreadcrumbType[] => {

    const location = useLocation();
    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbType[]>([{ path: `/${RouteNames.MAIN}`, label: 'главная' }]);

    useEffect(() => {

        const path: string[] = location.pathname.split('/').filter(Boolean);
        const currentPath: string = `/${path.join('/')}`;

        if (!breadcrumbs.find(breadcrumb => breadcrumb.path === currentPath)) {
            setBreadcrumbs(
                prev => [
                    ...prev,
                    {path: currentPath, label: path[path.length - 1] || RouteNames.MAIN}
                ]
            );
        }

    }, [location, breadcrumbs]);

    return breadcrumbs;

}