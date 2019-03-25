import ids from 'short-id';
import mongoose from '../../db/db';

ids.configure({
  lenght: 4,
  algorithm: 'sha1',
  salt: Math.random,
});

const Item = new mongoose.Schema({
  name: String,
  price: Number,
}, { id: false });

const Category = new mongoose.Schema({
  name: String,
  items: [Item],
}, { id: false });

const Menu = new mongoose.Schema({
  name: String,
  categories: [Category],
});

const Staff = new mongoose.Schema({
  name: String,
  email: String,
});

const Bar = new mongoose.Schema({
  _id: { type: String, default: ids.generate },
  name: String,
  currency: String,
  vat: Number,
  activeMenu: Menu,
  menus: [Menu],
  staff: [Staff],
});

const ownerSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  bars: [Bar],
});

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;
