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
const blogReducer = createReducer(initialState, (builder) => {
  // addCase nhận 2 tham số: 1.Là addPost, 2. là callback
  // builder nhu là func reducer
  // immerjs giúp cta mutate state an toàn
  builder.addCase(addPost, (state, action) => {
    // push action.payload
    const post = action.payload
    state.postList.push(post)
  })
})

export default blogReducer
