const router = require("express").Router();
const { Category, Product, Tag } = require("../../models");

router.get("/", async (req, res) => {
  Product.findAll({ include: [Category, Tag] })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", async (req, res) => {
  Product.findOne({
    where: { id: req.params.id },
    include: [Category, Tag],
  })
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", async (req, res) => {
  Product.create(req.body)
    .then((newProduct) => {
      res.json(newProduct);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/:id", async (req, res) => {
  Product.update(
    {
      product_name: req.body.product_name,
      price: req.body.price,
      stock: req.body.stock,
      category_id: req.body.category_id,
    },
    { where: { id: req.params.id } }
  )
    .then((updatedProduct) => {
      res.json(updatedProduct);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", async (req, res) => {
  Product.destroy({
    where: { id: req.params.id },
  })
    .then((deleteProduct) => {
      res.json(deleteProduct);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
