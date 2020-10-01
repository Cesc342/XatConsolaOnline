const Express = require("express");
const router = Express.Router();

const path = require("path");


router.use(Express.json());

router.use((req, res, next) => {
    res.writeHead('origin', '*')
    next();
})

router.get("/", (req, res) => {
    res.send("HELLO WORLD");
})


module.exports = router;