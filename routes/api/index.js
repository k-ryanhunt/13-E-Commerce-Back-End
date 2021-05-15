const router = require('express').Router()
const categoryRoutes = require('./category');
const productRoutes = require('./product');
const tagRoutes = require('./tag');

router.use('/category', categoryRoutes);
router.use('/product', productRoutes);
router.use('/tag', tagRoutes);

module.exports = router;