export const compareValues = (a: any, b: any, query: string, subQuery?: string) => {

    // проверка на вложенные поля
    const aValue = subQuery ? a[query]?.[subQuery] : a[query]
    const bValue = subQuery ? b[query]?.[subQuery] : b[query]

    // условия сортировки
    if (aValue > bValue) return 1
    if (aValue < bValue) return -1
    return 0

}