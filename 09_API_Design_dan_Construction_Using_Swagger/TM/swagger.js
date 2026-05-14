import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Tebak Angka",
            version: "1.0.0",
            description: "API permainan tebak angka berdasarkan nama"
        },
        servers: [
            {
                url: "http://localhost:8000"
            }
        ]
    },
    apis: ["./index.js"]
};

const specs = swaggerJSDoc(options);

export { swaggerUi, specs };