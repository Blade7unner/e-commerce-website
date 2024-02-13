const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// GET all tags
router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        through: ProductTag,
        as: 'products',
      },
    ],
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.error(err);
    res.status(500).json(err);
  });
});

// GET a single tag by its `id`
router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        through: ProductTag,
        as: 'products',
      },
    ],
  })
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json(err);
  });
});

// POST a new tag
router.post('/', (req, res) => {
  // expects { tag_name: "new tag" }
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.error(err);
    res.status(400).json(err);
  });
});

// PUT to update a tag by its `id`
router.put('/:id', (req, res) => {
  // expects { tag_name: "updated tag" }
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json(err);
  });
});

// DELETE a tag by its `id`
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json({ message: 'Tag successfully deleted' });
  })
  .catch(err => {
    console.error(err);
    res.status(500).json(err);
  });
});

module.exports = router;
