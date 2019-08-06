import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const SHOW_MORE = gql`
  mutation changeShowMore($showMoreStatus: Int!) {
    changeShowMore(showMoreStatus: $showMoreStatus) @client
  }
`;
let a = 1;
export const ShowMore = () => (
  <Mutation mutation={SHOW_MORE}>
    {addTodo => (
      <button
        onClick={() => {
          addTodo({ variables: { showMoreStatus: a } });
          a = (a + 1) % 2;
        }}
      >
        展示更多
      </button>
    )}
  </Mutation>
);
