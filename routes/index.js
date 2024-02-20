var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleString('en-GB', { hour12: true }),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString('en-GB', { hour12: true }),
  },
  {
    text: 'You are doing great. Keep going!',
    user: 'anonymous',
    added: new Date().toLocaleString('en-GB', { hour12: true }),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Msg Board', messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Add new Message' });
});

router.post('/new', function (req, res, next) {
  addMessage(req.body);
  res.redirect('/');
});

module.exports = router;

function addMessage({ msgText, user }) {
  messages.push({
    text: msgText,
    user,
    added: new Date().toLocaleString('en-GB', { hour12: true }),
  });
}