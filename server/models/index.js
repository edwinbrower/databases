var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      let queryStr = 'SELECT users.username, messages.id, messages.roomname, messages.text FROM messages LEFT OUTER JOIN users ON (messages.userid = users.id) order by messages.id desc';
      // db.query('SELECT * FROM messages', (err, results) => {
      db.query(queryStr, (err, results) => {
        if (err) {
          console.log(err);
        }
        // console.log('inside model ', results);
        callback(err, results);
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      let queryStr = 'INSERT into messages(text, userid, roomname) values (?, (SELECT id FROM users WHERE username=? limit 1), ?)';
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log(err);
        }
        console.log(results);
        callback(err, results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      let queryStr = 'SELECT * FROM users';
      db.query(queryStr, (err, results) => {
        if (err) {
          console.log(err);
        }
        callback(err, results);
      });
    },
    // post: function (username, callback) {
    //   db.query('INSERT into users (username) values ("' + username + '")', (err, results) => {
    //     callback(results);
    //   });
    // }
    post: function (params, callback) {
      console.log('inside post ', params);
      let queryStr = 'INSERT INTO users (username) VALUES (?)';
      db.query(queryStr, params, (err, results) => {
        if (err) {
          console.log(err);
        }
        callback(err, results);
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
