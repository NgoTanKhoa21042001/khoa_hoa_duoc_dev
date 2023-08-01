import { createAction, createReducer } from '@reduxjs/toolkit'
import { initalPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
}
// initialState nên đặt kiểu dữ liệu
const initialState: BlogState = {
  postList: initalPostList
}

// tạo action, truyền type là Post
export const addPost = createAction<Post>('blog/addPost')
// builderCallback là nơi xử lí action và update state trong này
const blogReducer = createReducer(initialState, (builder) => {})

export default blogReducer
