import { compareValues } from "@/features/sortTours/model/compareValues.ts";
import { ITour } from "@/shared/types";

export const sortTours = (
    data: ITour[],
    query: keyof ITour,
    subQuery?: keyof ITour[keyof ITour]
) => {
    return [...data].sort((a, b) =>
        compareValues(a, b, query as string, subQuery ? (subQuery as string) : undefined)
    );
};
