const router = require("express").Router();
const { Category, Product } = require("../../models");

router.get("/", async (req, res) => {
  Category.findAll({ include: [Product] })
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", async (req, res) => {
  Category.findOne({
    where: { id: req.params.id },
    include: [Product],
  })
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", async (req, res) => {
  Category.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/:id", async (req, res) => {
  Category.update(
    { category_name: req.body.category_name },
    { where: { id: req.params.id } }
  )
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", async (req, res) => {
  Category.destroy({
    where: { id: req.params.id },
  })
    .then((deleteCategory) => {
      res.json(deleteCategory);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;