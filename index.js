require("dotenv").config();

const server = require("./api/server");

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => console.log(`API up and running on port ${PORT}...`));