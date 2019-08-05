const { gql } = require('apollo-server-koa');

module.exports.typeDefs = gql`
  type Query {
    grade(gradeId: Int!): Grade
    class(classId: Int!): Class
    student(studentId: Int!): Student
  }

  type Grade {
    id: Int
    name: String
    classes: [Class]
  }

  type Class {
    id: Int
    name: String
    gradeId: Int
    students: [Student]
  }

  type Student {
    id: Int
    name: String
    classId: Int
  }
`;
