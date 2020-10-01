
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

        while(i < this.xat.length){
            let msgXat = this.xat[i];

            if(msgXat.nom == ultimRebut.nom){
                if(msgXat.msg == ultimRebut.msg){
                    break;
                }
            }

            noRebut.push(this.xat[i]);
            i++;
        }

        return noRebut;
    }
}

module.exports = Xat;