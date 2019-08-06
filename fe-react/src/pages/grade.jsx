import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

class Grade extends Component {
  constructor() {
    super();
    this.state = {
      gradeId: 1
    };
  }

  render() {
    console.log(this.props);
    return (
      <Query
        query={gql`
          {
            grade(gradeId: 1) {
              id
              name
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.grade.name;
        }}
      </Query>
    );
  }
}

export default Grade;
