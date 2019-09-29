const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [{
      id: "asdjd316542",
      title: "First server side post",
      content: "This is coming from server"
    },
    {
      id: "figjnl84521165",
      title: "Second server side post",
      content: "This is coming from server"
    }
  ]
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
