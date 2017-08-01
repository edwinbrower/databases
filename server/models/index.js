var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      let queryStr = 'SELECT users.username, messages.roomname, messages.text FROM messages INNER JOIN users ON messages.userid = users.id';
      // db.query('SELECT * FROM messages', (err, results) => {
      db.query(queryStr, (err, results) => {
        // console.log('inside model ', results);
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (username, text, roomname, callback) {
      let queryStr = 'INSERT into messages(text, userid, roomname) values ("' + text + '", (SELECT id FROM users WHERE username="' + username + '"), "' + roomname + '")';
      db.query(queryStr, (err, results) => {
        console.log(results);
        callback(results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      let queryStr = 'SELECT * FROM users';
      db.query(queryStr, (err, results) => {
        callback(results);
      });
    },
    // post: function (username, callback) {
    //   db.query('INSERT into users (username) values ("' + username + '")', (err, results) => {
    //     callback(results);
    //   });
    // }
    post: function (username, callback) {
      console.log('inside post ', username);
      let queryStr = 'INSERT INTO users (username) VALUES ("' + username + '")';
      db.query(queryStr, (err, results) => {
        callback(results);
      });
    }
  }
};
// module.exports.users.post('steve', (data) => { console.log(data); });
// module.exports.users.get((data) => {console.log(data)}); 
// module.exports.messages.post('edwin', 'lol', 'lobby', (data) => {});
// module.exports.messages.get((data) => {console.log(data)});

// server/models/index.js defines the messages and users models that 
// your application will use. Skeletons of the models have already 
// been created but you'll have to write out the details for their methods
