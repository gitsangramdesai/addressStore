var express = require('express');
var router = express.Router();
const Country = require("../models/Country");
const Address = require("../models/Address");

const dbModel = require("../models/index");


/* GET users listing. */
router.get('/',async function(req, res, next) {
  const rows = await Country.findAll();
  res.json(
      {
        message: 'Countries fetched successfully',
        metadata:"countries",
        data: rows 
      });
});


router.get('/city',async function(req, res, next) {
 const rows = await dbModel.Country.findAll({
  include: [
    {
      model: dbModel.City,
      as: "cities",
    },
  ],
});

  res.json(
      {
        message: 'Countries fetched successfully',
        metadata:"countries",
        data: rows 
      });
});


router.post('/address',async function(req, res, next) {
    let name = req.body.name;
    let addressLine1 = req.body.addressLine1;
    let addressLine2 = req.body.addressLine2;
    let landmark = req.body.landmark;
    let cityId = req.body.cityId;
    let phone = req.body.phone;
    let pin = req.body.pin;
    let email = req.body.email;

    let addressJson={
      name,
      email,
      addressLine1,
      addressLine2,
      landmark,
      cityId,
      phone,
      pin,
    }

    try{
      const address = await Address.create(addressJson);

        res.json(
        {
          message: 'Address created successfully',
          metadata:"address",
          success:true,
          data: addressJson 
        });
    }
    catch(err){
      res.json(
        {
          message: 'Address not created',
          metadata:"address",
          data: err.message.toString()
        });
    }

});


router.get('/address', async function(req, res, next) {
  const email = req.query.email;

  try {
    if (!email) {
      return res.status(400).json({
        message: 'Email is required',
        metadata: 'address',
        success: false
      });
    }

    const addresses = await Address.findAll({
      where: {
        email: email
      }
    });

    return res.status(200).json({
      message: 'Addresses fetched successfully',
      metadata: 'address',
      success: true,
      data: addresses
    });

  } catch (err) {
    return res.status(500).json({
      message: 'Failed to fetch addresses',
      metadata: 'address',
      success: false,
      error: err.message
    });
  }
});


router.delete('/address/:id', async function(req, res, next) {
  try {
    const id = Number(req.params.id);

    // Validate address ID
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        message: 'Invalid address ID',
        metadata: 'address',
        success: false
      });
    }

    // Find the address
    const address = await Address.findByPk(id);

    if (!address) {
      return res.status(404).json({
        message: 'Address not found',
        metadata: 'address',
        success: false
      });
    }

    // Delete the address
    await address.destroy();

    return res.status(200).json({
      message: 'Address deleted successfully',
      metadata: 'address',
      success: true,
      data: { id: id }
    });

  } catch (err) {
    next(err);
  }
});



module.exports = router;
