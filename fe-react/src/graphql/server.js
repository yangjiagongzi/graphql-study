import { gql } from 'apollo-boost';
import { client } from './client';

export function getGrade(gradeId) {
  return client.query({
    query: gql`
      query getGrade($gradeId: Int!) {
        grade(gradeId: $gradeId) {
          id
          name
        }
      }
    `,
    variables: {
      gradeId
    }
  });
}
