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
    const event = await Event.findById(req.params.id).populate('slots')
    event.slots.push(req.user)
    event.save()
    res.json(event); 
} catch(err) {
    res.json({err});
  }
}




