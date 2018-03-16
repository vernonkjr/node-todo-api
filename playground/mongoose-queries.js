const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

// const id = '5aaaebefc276dbac2b389d2011';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found!');
//   }
//   console.log('Todo by Id', todo);
// }).catch(e => console.log(e));

// finding User challenge
User.findById('5aa71b29fdab2e1834443525').then((user) => {
  if (!user) {
    console.log('User not found');
  } else {
    console.log('User is ', user);
  }
}).catch(e => console.log(e));
