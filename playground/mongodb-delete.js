// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteManay
  /*
  db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    console.log(result);
  });
  */

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });


  // challenge:
  // db.collection('Users').deleteMany({name: 'Mike'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteOne({_id: ObjectID('5a9ae083fa4beb547ce47627')}).then((result) => {
    console.log(result);
  });

  // db.close();
});
