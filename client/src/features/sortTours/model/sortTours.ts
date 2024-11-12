import { ITour } from "@/shared/types";

export const sortTours = (
    data: ITour[],
    query: keyof ITour,
    subQuery?: keyof ITour[keyof ITour]
) => {
    return [...data].sort((a, b) => {
        // проверка на вложенные поля
        const aValue = subQuery ? a[query]?.[subQuery] : a[query];
        const bValue = subQuery ? b[query]?.[subQuery] : b[query];

        // условия сортировки
        if (aValue > bValue) return 1;
        if (aValue < bValue) return -1;
        return 0;
    });
};