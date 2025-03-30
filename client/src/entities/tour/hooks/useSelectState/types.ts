export type SelectState = {
    state: {
        label: string
        value: string
    }
    update: (sort: string) => void
}