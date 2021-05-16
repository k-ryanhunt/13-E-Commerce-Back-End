const router = require("express").Router();
const { Product, Tag } = require("../../models");

router.get("/", async (req, res) => {
  Tag.findAll({ include: [Product] })
    .then((tags) => {
      res.json(tags);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", async (req, res) => {
  Tag.findOne({
    where: { id: req.params.id },
    include: [Product],
  })
    .then((tag) => {
      res.json(tag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", async (req, res) => {
  Tag.create(req.body)
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/:id", async (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    { where: { id: req.params.id } }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", async (req, res) => {
  Tag.destroy({
    where: { id: req.params.id },
  })
    .then((deleteTag) => {
      res.json(deleteTag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;