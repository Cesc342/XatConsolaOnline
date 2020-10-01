const Express = require("express");
const router = Express.Router();

const path = require("path");

const _Xat = require("./xat");
const Xat = new _Xat();


router.use(Express.json());

router.use((req, res, next) => {
    res.setHeader('Origin', '*')
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next();
})

router.get("/", (req, res) => {
    
    res.json({nom: "Lol", msg:"HEY"});
})

router.get("/agafarTot", (req, res) => {
    res.json(Xat.agafarXat());
})

router.post("/agafarNous", (req, res) => {
    const body = req.body;

    res.json(Xat.agafarNous(body));
})

router.post("/enviar", (req, res) => {
    const body = req.body;
    console.log(`${body.nom}: ${body.msg}`)
    Xat.enviar(body.nom, body.msg);
    res.sendStatus(200);
})

module.exports = router;