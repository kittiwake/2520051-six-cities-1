import { createSlice } from '@reduxjs/toolkit';
import { initReview, NameSpace } from '../../constant';
import { addCommentAction, fetchCommentsAction } from '../api-actions';
import { CommentsProcess } from '../../types/state';


const initialState: CommentsProcess = {
  comments: [],
  countComments: 0,
  review: {
    rating: initReview.rating,
    comment: initReview.comment
  },
  isCommentsLoading: false,
  isReviewLoading: false,
  error: null,
};


export const commentsData = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.countComments = action.payload.length;
        state.isCommentsLoading = false;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isCommentsLoading = true;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.isCommentsLoading = false;
        state.error = 'Ошибка загрузки'; //добавить rejectWithValue в fetchOfferAction
      })
      .addCase(addCommentAction.fulfilled, (state, action) => {
        state.comments.splice(0, 0, action.payload);
        state.countComments++;
        state.review.comment = initReview.comment;
        state.review.rating = initReview.rating;
        state.isReviewLoading = false;
      })
      .addCase(addCommentAction.pending, (state) => {
        state.isReviewLoading = true;
      })
      .addCase(addCommentAction.rejected, (state) => {
        state.isReviewLoading = false;
        state.error = 'Ошибка загрузки'; //добавить rejectWithValue в fetchOfferAction
      });

  }
});
