export type Rating = "bad" | "usual" | "good"

export type Post = {
    rating: Rating | null
    isRead: boolean
    id: string,
    title: string,
    body: string
}
