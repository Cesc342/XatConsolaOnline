
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

    agafarNous(ultimRebut){
        let i = 0;
        let noRebut = [];
        let tempMsg = "";

        while(this.xat[i] != tempMsg){
            i++;
        }
    }
}

module.exports = Xat;