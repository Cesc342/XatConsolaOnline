const Express = require("express");
const router = Express.Router();

const path = require("path");

const _Xat = require("./xat");
const Xat = new _Xat();

router.use(Express.static( path.join(__dirname, "public") ));
router.use(Express.json());

router.use((req, res, next) => {
    res.setHeader('Origin', '*')
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next();
})

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "ConnectarServidor.js"));
})

router.post("/comprovarContra", (req, res) => {
    let body = req.body;
    console.table(Xat);
    console.log(body);

    if(Xat.get(body.contra)){
        res.sendStatus(200);
    }else{
        res.sendStatus(401);
    }
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
    let enviat = Xat.enviar(body.nom, body.msg);
    if(enviat){
        res.sendStatus(200);
    }else{
        res.sendStatus(403);
    }
})

module.exports = router;