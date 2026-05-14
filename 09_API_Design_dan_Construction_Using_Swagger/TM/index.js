import express from "express";
import { swaggerUi, specs } from "./swagger.js";

const app = express();
const PORT = 8000;

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

function generateNumber(name) {
    let total = 0;

    for (let i = 0; i < name.length; i++) {
        total += name.charCodeAt(i);
    }

    return (total % 100) + 1;
}

/**
 * @swagger
 * /:
 *   post:
 *     summary: Tebak angka berdasarkan nama
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *               tebakan:
 *                 type: number
 *     responses:
 *       200:
 *         description: Hasil tebakan
 */
app.post("/", (req, res) => {
    const { nama, tebakan } = req.body;

    const angkaBenar = generateNumber(nama);

    if (tebakan === angkaBenar) {
        return res.json({
            jawaban: `Benar sekali! Tebakannya adalah ${angkaBenar}.`
        });
    }

    if (tebakan > angkaBenar) {
        return res.json({
            jawaban: "Tebakanmu terlalu tinggi!"
        });
    }

    return res.json({
        jawaban: "Tebakanmu terlalu rendah!"
    });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});