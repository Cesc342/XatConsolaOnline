
class Xat{
    constructor()
    {
        this.xat = [];
    }

    enviar(nom, msg)
    {
        this.xat.push({
            nom: nom,
            msg: msg
        })
    }

    agafarXat()
    {
        return this.xat;
    }
}