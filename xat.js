
class Xat{
    constructor()
    {
        this.xat = [{
            nom:"",
            msg:""
        }];
    }

    enviar(nom, msg)
    {
        this.xat.unshift({
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

            noRebut.unshift(this.xat[i]);
            i++;
        }

        if(i == 0)
        {
            return null;
        }

        return noRebut;
    }
}

module.exports = Xat;