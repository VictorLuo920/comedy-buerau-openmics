const Event = require('../models/event');

module.exports = {
  create,
  index
};

async function create(req, res) {
  console.log('user: ', req.user)
  try {
    await Event.create(req.body);
    index(req, res);
  } catch (err) {
    res.json({err});
  }
}

async function index(req, res) {
  const events = await Event.find({})
  res.json(events);
}




