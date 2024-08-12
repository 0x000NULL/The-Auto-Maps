const express = require('express');
const pool = require('../config/db');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM cars');
    conn.release();
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
