const Event = require('../models/event');

module.exports = {
  create,
  index,
  slot,
  unslot
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
    if ( event.slots.some(slot => {return slot['_id'] == req.user._id}) === false ) {
      event.slots.push(req.user)
      event.save()
      res.json(event); 
    } else {
      res.json(event);}
  } catch(err) {
      res.json({err});
  }
}

async function unslot(req, res) {
  try {
    const event = await Event.findById(req.params.id).populate('slots')
    if ( event.slots.some(slot => {return slot['_id'] = req.user._id})) {
      event.slots = event.slots.filter(slot => {return slot['_id'] != req.user._id})
      event.save()
      res.json(event); 
    } else {
      console.log('failed .some check')
      res.json(event);}
  } catch(err) {
      res.json({err});
  }
}



