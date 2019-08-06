import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import logo from './logo.svg';
import './App.css';
import { client } from './graphql/client';
import { More } from './components/more';
import { ShowMore } from './components/showMore';

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Query
          query={gql`
            query getGrade($gradeId: Int!) {
              grade(gradeId: $gradeId) {
                id
                name @client
              }
            }
          `}
          variables={{
            gradeId: 1
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return <p>{data.grade.name}</p>;
          }}
        </Query>
        <More />
        <ShowMore />
      </ApolloProvider>
    </div>
  );
}

export default App;
