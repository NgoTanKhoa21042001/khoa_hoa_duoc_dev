import { createAction, createReducer } from '@reduxjs/toolkit'
import { initalPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
  // postList có kiểu Post[]
  postList: Post[]
  editingPost: Post | null
}
// initialState nên đặt kiểu dữ liệu
const initialState: BlogState = {
  postList: initalPostList,
  editingPost: null
}

// tạo action, truyền type là Post
export const addPost = createAction<Post>('blog/addPost')
// delete cần id nên truyền id có kiểu là string
export const deletePost = createAction<string>('blog/deletePost')
// startEditting
export const startEditingPost = createAction<string>('/blog/startEditingPost')
// cancel editing post
export const cancleEditingPost = createAction('/blog/cancleEditingPost')
// finish editing post
export const finishingEditingPost = createAction<Post>('/blog/finishEditing')

// builderCallback là nơi xử lí action và update state trong này
const blogReducer = createReducer(initialState, (builder) => {
  // addCase nhận 2 tham số: 1.Là addPost, 2. là callback
  // builder nhu là func reducer
  // immerjs giúp cta mutate state an toàn
  builder
    .addCase(addPost, (state, action) => {
      // push action.payload
      const post = action.payload
      state.postList.push(post)
    })
    .addCase(deletePost, (state, action) => {
      // id của post
      const postId = action.payload
      // tìm index của post
      const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
      // tiến hành xóa
      if (foundPostIndex !== -1) {
        //  // mutate state
        state.postList.splice(foundPostIndex, 1)
      }
    })
    .addCase(startEditingPost, (state, action) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id === postId) || null
      state.editingPost = foundPost
    })
    .addCase(cancleEditingPost, (state) => {
      state.editingPost = null
    })
    .addCase(finishingEditingPost, (state, action) => {
      const postId = action.payload.id
      state.postList.some((post, index) => {
        if (post.id === postId) {
          // chỉnh sửa bằng với bài post hiện tại
          state.postList[index] = action.payload
          // để dừng vòng lặp
          return true
        }
        return false
      })
      // reset lại về button Publish Post
      state.editingPost = null
    })
})

export default blogReducer
