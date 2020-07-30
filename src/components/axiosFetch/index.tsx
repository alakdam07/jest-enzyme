import React, { useEffect } from 'react';
import { IRootState } from 'store/combineReducer';
import { fetchAllPosts } from 'store/reducer/createAsyncAxios';
import { useSelector, useDispatch } from 'react-redux';

export default () => {
  const { posts } = useSelector((rootState: IRootState) => rootState.fetching);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);
  return (
    <div>
      {posts.slice(0, 10).map((i, index) =>
        <div key={index} >
          <li>{i.title}</li>
        </div>)}
    </div>
  );
};
