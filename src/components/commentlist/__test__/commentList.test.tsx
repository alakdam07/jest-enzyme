import React from 'react';
import { mount } from "enzyme"; // mount is full dom renderning function with children
import CommentList from 'components/commentlist/index';
import Root from "root/index";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentList />
    </Root>
  );
  // console.log(wrapped.debug());
});

afterEach(() => {
  wrapped.unmount(); // it cleans the mount after test.
});

it(`Find the lenght of the li from redux store`, () => {
  expect(wrapped.find(`li`).length).toEqual(3);
});

it(`display the text of the li from redux store`, () => {
  // .render() => CheerioWrapper
  // console.log(wrapped.render().text(``));
});