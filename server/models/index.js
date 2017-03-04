var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.dbConnection.query('SELECT * FROM messages', (err, results) => {
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (name, message, callback) {
      db.dbConnection.query('SELECT user_id FROM users WHERE name="' + name + '"', (err, userId) => {
        db.dbConnection.query('INSERT into messages (message, user) values ("' + message + '", "' + userId[0].user_id + '")', (err, results) => {
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
    post: function (user, callback) {
      db.dbConnection.query('INSERT into users (name) values ("' + user + '")', (err, results) => {
        callback(results);
      });
    }
  }
};
// module.exports.users.post('zebra', (data) => {console.log(data)});
// module.exports.users.get((data) => {console.log(data)}); 
// module.exports.messages.post('edwin', 'hello', (data) => {});
// module.exports.messages.get((data) => {console.log(data)});

// server/models/index.js defines the messages and users models that 
// your application will use. Skeletons of the models have already 
// been created but you'll have to write out the details for their methods
