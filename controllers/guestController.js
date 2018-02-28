const Model = require ('../model/guestModel.js')
console.log('controller!!');

class GuestController {

  static verifyForm(req, res, next) {
    console.log('verifyForm');
    let formInfo = req.body
    console.log(formInfo);

    res.status(200).json({response})
  }


}


module.exports = GuestController
