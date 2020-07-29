import { createSlice } from '@reduxjs/toolkit';
import { createAction, PayloadAction } from '@reduxjs/toolkit';

describe(`This is counter test`, () => {
  const { actions, reducer } = createSlice({
    "reducers": {
      "increment": (state) => state + 1
    },
    "initialState": 0,
    "name": `counter`
  });
  it(`should create increment action`, () => {
    // eslint-disable-next-line no-prototype-builtins
    expect(actions.hasOwnProperty(`increment`)).toBe(true);
  });
});
