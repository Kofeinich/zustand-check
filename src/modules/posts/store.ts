import {create} from 'zustand'
import {Post, Rating} from "./types";
import {immer} from 'zustand/middleware/immer'

type State = {
    posts: Record<string, Post>,
    storeDescription: string
}

type Action = {
    addNewPost: (newPost: Post) => void
    readPost: (postId: string) => void
    changeRating: (postId: string, newRating: Rating) => void
    deletePost: (postId: string) => void
}
export const useStorePosts = create(
    immer<State & Action>(
        (set) => ({
            storeDescription: '',
            posts: {},
            addNewPost: (newPost: Post) => set((state) => {
                state.posts[newPost.id] = newPost
            }),
            readPost: (postId: string) => set((state) => {
                state.posts[postId].isRead = !state.posts[postId].isRead
            }),
            changeRating: (postId: string, newRating: Rating) => set((state) => {
                state.posts[postId].rating = newRating
            }),
            deletePost: (postId: string) => set((state) => {
                delete state.posts[postId]
            })
        })
    )
)
