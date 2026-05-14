const express = require('express');
const app = express();

const { swaggerUi, swaggerSpec } = require('./swagger');

const menu = [
  { nama: "Bakmi Ayam", kategori: "bakmi" },
  { nama: "Mie Ramen", kategori: "rames" },
  { nama: "Bakso", kategori: "bakmi" }
];

// Swagger endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /menu:
 *   get:
 *     summary: Ambil semua kategori menu
 *     tags:
 *       - Menu
 *     responses:
 *       200:
 *         description: Daftar kategori berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 kategori_tersedia:
 *                   type: array
 *                   items:
 *                     type: string
 */
app.get('/menu', (req, res) => {

  const kategori = [...new Set(menu.map(item => item.kategori))];

  res.json({
    kategori_tersedia: kategori
  });
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});