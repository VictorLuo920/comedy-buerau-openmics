const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slotSchema = new Schema({
  users: [{type: Schema.Types.ObjectId, ref='User'}]
})

const dateSchema = new Schema({
  time: Date,
  slots: [slotSchema]
})

const eventSchema = new Schema({
  name: String,
  description: String,
  times: [dateSchema]
}, {
  timestamps: true
});




// Ensure that name of the event is limited to 140 characters
eventSchema.pre('save', function(next) {
  this.name = this.name.substr(0, 140)
  next();
});

module.exports = mongoose.model('Event', eventSchema);