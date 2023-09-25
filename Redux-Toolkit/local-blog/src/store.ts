import { configureStore } from '@reduxjs/toolkit'
import blogReducer from 'pages/blog/blog.slice'

export const store = configureStore({
  reducer: { blog: blogReducer }
})

// lấy root state và AppDispatch từ store chúng ta

// RootState. Đây là một kiểu dữ liệu đại diện cho kiểu dữ liệu trả về của hàm store.getState().

// Trong Redux, store là một đối tượng chứa toàn bộ trạng thái của ứng dụng. store.getState() là một phương thức được cung cấp bởi Redux để truy cập và lấy giá trị của trạng thái hiện tại trong store.

// typeof store.getState là một cách để lấy kiểu dữ liệu của hàm store.getState(). Bằng cách sử dụng ReturnType, chúng ta có thể lấy kiểu dữ liệu trả về của hàm đó.
export type RootState = ReturnType<typeof store.getState>

// typeof store.dispatch là một cách để lấy kiểu dữ liệu của phương thức dispatch trong đối tượng store. Bằng cách sử dụng typeof, chúng ta có thể lấy kiểu dữ liệu của một biểu thức hoặc giá trị.
export type AppDispatch = typeof store.dispatch
