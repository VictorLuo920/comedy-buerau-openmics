const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const eventSchema = new Schema(
  {
    name: String,
    description: String,
    time: Date,
    maxSlots: Number,
    slots: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);


// Ensure that name of the event is limited to 140 characters
eventSchema.pre('save', function(next) {
  this.name = this.name.substr(0, 140)
  next();
});

module.exports = mongoose.model('Event', eventSchema);