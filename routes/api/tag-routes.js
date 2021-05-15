const router = require("express").Router();
const { product, tag } = require("../../models");

router.get("/", async (req, res) => {
  tag
    .findAll({ include: [product] })
    .then((tags) => {
      res.json(tags);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", async (req, res) => {
  tag
    .findOne({
      where: { id: req.params.id },
      include: [product],
    })
    .then((tag) => {
      res.json(tag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", async (req, res) => {
  tag
    .create(req.body)
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/:id", async (req, res) => {
  tag
    .update(
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
  tag
    .destroy({
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
