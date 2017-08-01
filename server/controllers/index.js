var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log(req.params);
      models.messages.get( (err, data)=>{
        // console.log(data);
        if (err) {
          console.log(err);
        }
        res.send(JSON.stringify(data));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('req body', req.body);
      // console.log(req);
      // console.log(res);
      // res.send(JSON.stringify(data));
      models.messages.post(req.body.username, req.body.text, req.body.roomname, (err, data) => {
        if (err) {
          console.log(err);
        }
        res.sendStatus(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    // get: function (req, res) {
    //   res.send(JSON.stringify(data));

    // },
    get: function (req, res) {
      console.log('users get');
      models.users.get( (err, data)=>{
        if (err) {
          console.log(err);
        }
        res.send(JSON.stringify(data));
      });
    },
    post: function (req, res) {
      // console.log('request url', req.headers.referer);
      // res.send(JSON.stringify(data));
      console.log(req.body.username);
      models.users.post(req.body.username, (err, data) => {
        if (err) {
          console.log(err);
        }
        res.sendStatus(201);
      });
    }
  }
};

