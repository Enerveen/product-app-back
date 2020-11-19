const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  params: {
    type: Object,
    required: true,
    default: { price: 'Неизвестна', amount: 'Неизвестно', color: 'Неопределённый', origin: 'Неизвестен' },
  },
});

module.exports = mongoose.model('Product', productSchema);
