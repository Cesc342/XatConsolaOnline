const Express = require("express");
const app = Express();

const router = require("./router");

app.use(router);

const HOST = "localhost";
const PORT = 3000;
app.listen(PORT, HOST, () => {
    console.log(`Servidor corren en ${HOST}:${PORT}`);
})