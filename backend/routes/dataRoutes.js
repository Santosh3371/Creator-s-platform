const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

router.get('/', auth, (req, res) => res.json({ message: 'get all' }));
router.post('/', auth, (req, res) => res.json({ message: 'create' }));
router.get('/:id', auth, (req, res) => res.json({ message: 'get one' }));
router.put('/:id', auth, (req, res) => res.json({ message: 'update' }));
router.delete('/:id', auth, (req, res) => res.json({ message: 'delete' }));

module.exports = router;
