const Event = require('../models/event');

module.exports = {
  create,
  index,
  slot
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

async function slot(req, res) {
  try {
    const event = await Event.findById(req.params.id)
    res.json(event);
    console.log(event);
    console.log(req.user); // I do not have access to req.user here
// push the user into the Event Array... with req.User._id figure out the promise issue. 
} catch(err) {
    res.json({err});
  }
}




