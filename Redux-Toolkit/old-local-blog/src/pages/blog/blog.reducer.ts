import { createReducer } from '@reduxjs/toolkit'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
}

const initialState: BlogState = {
  postList: []
}
// builderCallback là nơi xử lí action và update state trong này
const blogReducer = createReducer(initialState, (builder) => {})

export default blogReducer
