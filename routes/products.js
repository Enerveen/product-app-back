const express = require('express');
const router = express.Router();
const Product = require('../models/product');

//Getting all
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Getting one by name
router.get('/:name', async (req, res) => {
  try {
    const products = await Product.find({ name: req.params.name });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Getting one by param
router.get('/:param/:value', async (req, res) => {
  try {
    const products = await Product.find({ [`params.${req.params.param}`]: req.params.value });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Getting one by name and param
router.get('/:name/:param/:value', async (req, res) => {
  try {
    const products = await Product.find({ name: req.params.name, [`params.${req.params.param}`]: req.params.value });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Creating one
router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    params: req.body.params,
  });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
