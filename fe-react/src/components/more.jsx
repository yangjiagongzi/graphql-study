import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_SHOW_MORE_STATUS = gql`
  {
    showMore @client
  }
`;
export const More = () => (
  <Query query={GET_SHOW_MORE_STATUS}>
    {({ data }) => {
      if (data && data.showMore) {
        return <div>我是more</div>;
      }
      return <div />;
    }}
  </Query>
);
