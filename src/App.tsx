import React from 'react';
import CommentBox from 'components/commentbox';
import CommentList from 'components/commentlist';
import Counter from 'components/counter';
import Fetch from 'components/fetchdata';
import styled from 'styled-components';

const Body = styled.div`
position: absolute;
top: 50%;
right: 50%;
transform: translate(-50%, -50%);
`;

const Divider = styled.div`
margin-top: 40px;
`;

const LineDivider = styled.hr`
border-top: 1px solid;
`;
const App = () => {
  return (
    <Body>
      <Divider>
        <Counter />
      </Divider>
      <LineDivider />
      <Divider>
        <CommentList />
        <CommentBox />
      </Divider>
      <LineDivider />
      <Divider>
        <Fetch />
      </Divider>
    </Body>
  );
};

export default App;
