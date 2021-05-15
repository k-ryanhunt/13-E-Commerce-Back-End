const router = require("express").Router();
const { category, product } = require("../../models");

router.get("/", async (req, res) => {
  category
    .findAll({ include: [product] })
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", async (req, res) => {
  category
    .findOne({
      where: { id: req.params.id },
      include: [product],
    })
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", async (req, res) => {
  category
    .create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/:id", async (req, res) => {
  category
    .update(
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
  category
    .destroy({
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
