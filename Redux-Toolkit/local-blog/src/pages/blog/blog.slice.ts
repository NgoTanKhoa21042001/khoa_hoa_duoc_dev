import { createAction, createReducer, createSlice, current, nanoid, PayloadAction } from '@reduxjs/toolkit'
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

const blogSlice = createSlice({
  name: 'blog', //  Đây là prefix cho action type của bạn
  initialState, // // Giá trị khởi tạo state cho reducer, cũng có thể là function khởi tạo
  reducers: {
    //   // key name sẽ được dùng để generate ra action
    // khai báo những cái action
    // reducer chỉ chấp nhận matchObj
    deletePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      // tìm index của post
      const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
      // tiến hành xóa
      if (foundPostIndex !== -1) {
        //  // mutate state
        state.postList.splice(foundPostIndex, 1)
      }
    },
    startEditingPost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id === postId) || null
      state.editingPost = foundPost
    },
    cancelEditingPost: (state) => {
      state.editingPost = null
    },
    finishingEditingPost: (state, action: PayloadAction<Post>) => {
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
    },
    addPost: {
      reducer: (state, action: PayloadAction<Post>) => {
        // push action.payload
        const post = action.payload
        state.postList.push(post)
      },
      prepare: (post: Omit<Post, 'id'>) => ({
        payload: {
          ...post,
          id: nanoid()
        }
      })
    }
  },
  extraReducers(builder) {
    builder
      .addMatcher(
        (action) => action.type.includes('cancel'),
        (state, action) => {}
      )
      .addDefaultCase((state, action) => {
        // ko Nhảy case nào đó thì vòa case này
        console.log(`action type: ${action.type}`, current(state))
      })
  }
})
export const { addPost, finishingEditingPost, cancelEditingPost, startEditingPost, deletePost } = blogSlice.actions
// export reducer được generate ra từ slice
const blogReducer = blogSlice.reducer
export default blogReducer
