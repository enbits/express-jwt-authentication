var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  var posts = [
    {
      id: 1,
      title: 'The First Post',
      content: 'Content of the first post',
    },
    {
      id: 2,
      title: 'The Second Post',
      content: 'Content of the second post',
    },
  ]
  res.json(posts);
});

module.exports = router;
