// Import necessary dependencies
import { createSlice } from '@reduxjs/toolkit';
import AxiosConfig from "../config/AxiosConfig";

// Define initial state
const initialState = {
  blogs: [],
  page: 1,
  totalRecords: 0,
  loadMore: false,
};

// Create the blog slice
const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogs.push(...action.payload);
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalRecords: (state, action) => {
      state.totalRecords = action.payload;
    },
    setLoadMore: (state, action) => {
      state.loadMore = action.payload;
    },
  },
});

// Export actions
export const { setBlogs, setPage, setTotalRecords, setLoadMore } = blogsSlice.actions;

// Define async action to fetch data
export const getData = (page, category) => {
  return (dispatch) => {
    AxiosConfig.get(`/blogs?page=${page}${category && "&category=" + category}`)
      .then((response) => {
        if (response.data.success) {
          dispatch(setBlogs(response.data.data.data));
          dispatch(setPage(page + 1));
          dispatch(setTotalRecords(response.data.data.total));
          dispatch(setLoadMore(false));

          if (!category) {
            // Handle setting all records
          }
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setLoadMore(false));
      });
  };
};

// Export the blog reducer
export default blogsSlice.reducer;
