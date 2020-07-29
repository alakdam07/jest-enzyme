import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, sort } from 'store/reducer/todo/todo';
import { IRootState } from 'store/combineReducer';

const CommentList = () => {
  const state = useSelector((rootState: IRootState) => rootState.todo);
  const dispatch = useDispatch();
  return (
    <div>
      {state.map((i) =>
        <ul key={i.id}><li data-test="" style={{ "margin": 10 }}>
          {i.title}
          {<button onClick={() => dispatch(remove(i.id))}>remove</button>}
        </li></ul>)}
      <button onClick={() => dispatch(sort())}>sort</button>
    </div>
  );
};

export default CommentList;
