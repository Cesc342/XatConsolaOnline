const Express = require("express");
const router = Express.Router();

const path = require("path");

const _Xat = require("./xat");
const Xat = new _Xat();


router.use(Express.json());

router.use((req, res, next) => {
    res.writeHead('Access-Control-Allow-Origin','origin *')
    next();
})

router.get("/", (req, res) => {
    res.send("HELLO WORLD");
})


module.exports = router;