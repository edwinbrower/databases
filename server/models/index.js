var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // db.dbConnection.query('SELECT * FROM messages', (err, results) => {
      db.dbConnection.query('SELECT users.username, messages.roomname, messages.text FROM messages INNER JOIN users ON messages.user = users.user_id', (err, results) => {
        // console.log('inside model ', results);
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (username, text, roomname, callback) {
      db.dbConnection.query('SELECT user_id FROM users WHERE username="' + username + '"', (err, userId) => {
        db.dbConnection.query('INSERT into messages (text, user, roomname) values ("' + text + '", "' + userId[0].user_id + '", "' + roomname + '")', (err, results) => {
          callback(results);
        });
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.dbConnection.query('SELECT * FROM users', (err, results) => {
        callback(results);
      });
    },
    post: function (username, callback) {
      db.dbConnection.query('INSERT into users (username) values ("' + username + '")', (err, results) => {
        callback(results);
      });
    }
  }
};
module.exports.users.post('edwin', (data) => { console.log(data); });
// module.exports.users.get((data) => {console.log(data)}); 
// module.exports.messages.post('edwin', 'lol', 'lobby', (data) => {});
// module.exports.messages.get((data) => {console.log(data)});

// server/models/index.js defines the messages and users models that 
// your application will use. Skeletons of the models have already 
// been created but you'll have to write out the details for their methods
