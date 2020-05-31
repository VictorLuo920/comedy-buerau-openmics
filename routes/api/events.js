const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/events');

router.get('/', eventsCtrl.index);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
// router.use(require('../../config/auth'));
router.post('/', eventsCtrl.create);
router.use(require('../../config/auth'));
router.get('/:id', eventsCtrl.slot);
router.get('/:id/unslot', eventsCtrl.unslot);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
