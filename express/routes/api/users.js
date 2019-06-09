const express = require('express');

const router = express.Router();

const User = require('../../models/User');
const Finances = require('../../models/Finances');

// Get all from user TODO:
router.get('/', (req, res) => {
  User.find().then(items => res.json(items));
});

router.post('/newUser', (req, res) => {
  const user = req.body;
  const { firebaseId } = req.body;
  const usr = {
    firebaseId,
    wallets: [],
    finances: [],
    categories: [],
  };
  User.create(user, (err, doc = usr) => {
    if (err) return err;
    res.send(doc);
  });
});

// /////////////
// // WALLETS
// /////////////

// GET wallets
router.get('/wallets/:firebaseId', (req, res) => {
  User.findOne({ firebaseId: req.params.firebaseId })
    .select('wallets')
    .then(wallets => res.status(200).send(wallets))
    .catch(err => res.status(404).json({ status: false }));
});

// POST wallet
router.post('/wallets/:firebaseId', (req, res) => {
  const newWallet = {
    name: req.body.name,
    value: req.body.value,
  };
  User.findOneAndUpdate(
    { firebaseId: req.params.firebaseId },
    { $push: { wallets: newWallet } }
  )
    .then(wallet => res.status(201).send(wallet))
    .catch(err => res.status(404).json({ success: false }));
});

// PATCH wallet
router.patch('/wallets/:id', (req, res) => {
  User.findOneAndUpdate(
    { 'wallets._id': req.params.id },
    {
      $set: {
        'wallets.$.name': req.body.name,
        'wallets.$.value': req.body.value,
      },
    }
  )
    .then(wallet => res.status(201).send(wallet))
    .catch(err => console.log(err));
});

// /////////////
// // FINANCES
// /////////////
// GET finances
router.get('/finances/:firebaseId', (req, res) => {
  User.findOne({ firebaseId: req.params.firebaseId })
    .select('finances')
    .then(finance => res.status(200).send(finance))
    .catch(err => res.status(404).json({ success: false }));
});

// GET finance
router.get('/finances/:firebaseId/:id', (req, res) => {
  User.findOne(
    { firebaseId: req.params.firebaseId },
    { finances: { $elemMatch: { _id: req.params.id } } }
  )
    .then(finance => res.status(200).send(finance))
    .catch(err => res.status(404).json({ success: false }));
});

// POST finance
router.post('/finances/:id', (req, res) => {
  const newFinance = {
    description: req.body.description,
    value: req.body.value,
    category: req.body.category,
    financeType: req.body.financeType,
    date: req.body.date,
    walletId: req.body.walletId,
  };
  User.findOneAndUpdate(
    { firebaseId: req.params.id },
    { $push: { finances: newFinance } }
  )
    .then(finance => res.status(201).send(finance))
    .catch(err => res.status(404).json({ success: false }));
});

// DELETE finance
router.delete('/finances/:firebaseId/:id', (req, res) => {
  User.findOneAndUpdate(
    { firebaseId: req.params.firebaseId },
    { $pull: { finances: { _id: req.params.id } } }
  )
    .then(finance => res.status(200).send(finance))
    .catch(err => res.status(404).json({ success: false }));
});

// PATCH finance
router.patch('/finances/:id', (req, res) => {
  User.findOneAndUpdate(
    { 'finances._id': req.params.id },
    {
      $set: {
        'finances.$.description': req.body.description,
        'finances.$.value': req.body.value,
        'finances.$.category': req.body.category,
        'finances.$.financeType': req.body.financeType,
      },
    }
  )
    .then(finance => res.status(200).send(finance))
    .catch(err => res.status(404).json({ success: false }));
});

// /////////////
// // CATEGORIES
// /////////////
// Get categories from user categories array
router.get('/categories/:firebaseId', (req, res) => {
  User.findOne({ firebaseId: req.params.firebaseId })
    .select('categories')
    .then(category => res.status(200).send(category))
    .catch(err => res.status(404).json({ success: false }));
});

// Add new category to user categories array
router.post('/categories/:firebaseId', (req, res) => {
  const newCategory = {
    name: req.body.value,
  };
  User.findOneAndUpdate(
    { firebaseId: req.params.firebaseId },
    { $push: { categories: newCategory } }
  )
    .then(category => res.status(201).send(category))
    .catch(err => res.status(404).json({ success: false }));
});

// Delete category from user categories array

module.exports = router;
