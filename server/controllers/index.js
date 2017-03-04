var models = require('../models');
// var url = 

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log(req.params);
      res.send(req.params.id);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.send(req.params.id);

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.send(req.params.id);

    },
    post: function (req, res) {
      console.log('request url', req.headers.referer);
      res.send(req.params.id);

    }
  }
};

