const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET all categories
router.get('/', (req, res) => {
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      },
    ],
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.error(err);
    res.status(500).json(err);
  });
});

// GET one category by its `id` value
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      },
    ],
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json(err);
  });
});

// POST a new category
router.post('/', (req, res) => {
  // Check if category_name is provided and not null
  if (!req.body.category_name || req.body.category_name.trim() === '') {
    res.status(400).json({ error: 'Category name cannot be empty' });
    return;
  }

  // Create the category
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.error(err);
    res.status(500).json(err);
  });
});

// PUT to update a category by its `id` value
router.put('/:id', (req, res) => {
  // Check if category_name is provided and not null
  if (!req.body.category_name || req.body.category_name.trim() === '') {
    res.status(400).json({ error: 'Category name cannot be empty' });
    return;
  }

  // Update the category
  Category.update({ category_name: req.body.category_name }, {
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData[0]) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json(err);
  });
});

// DELETE a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json({ message: 'Category deleted' });
  })
  .catch(err => {
    console.error(err);
    res.status(500).json(err);
  });
});

module.exports = router;
