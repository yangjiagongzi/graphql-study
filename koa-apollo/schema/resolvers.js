const database = require('../database');

module.exports.resolvers = {
  Query: {
    grade: (root, { gradeId }) => {
      const grades = database.grade;
      for (const grade of grades) {
        if (grade.id === gradeId) {
          return grade;
        }
      }
    },
    class: (root, { classId }) => {
      const classes = database.class;
      for (const classItem of classes) {
        if (classItem.id === classId) {
          return classItem;
        }
      }
    },
    student: (root, { studentId }) => {
      const students = database.student;
      for (const student of students) {
        if (student.id === studentId) {
          return student;
        }
      }
    }
  },
  Grade: {
    name: root => root.name + '（北京校区）',
    classes: root => {
      console.log('查询了班级数据表！');
      const gradeId = root.id;
      const classes = database.class.filter(
        classItem => classItem.gradeId === gradeId
      );
      return classes;
    }
  },
  Class: {
    students: root => {
      const classId = root.id;
      const students = database.student.filter(
        student => student.classId === classId
      );
      return students;
    }
  }
};
