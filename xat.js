const fs = require("fs");

class Xat extends Map{
    constructor()
    {
        super();
        this.xat = [{
            nom:"",
            msg:""
        }];

        this.cargar();
    }

    cargar()
    {
        let dades = fs.readFileSync("./Contras.json");
        let json = JSON.parse(dades);

        for(let persona of json){
            this.set(persona.contrasenya, persona);
        }
    }

    enviar(contrasenya, msg)
    {
        let persona = this.get(contrasenya);
        if(persona)
        {
            this.xat.unshift({
                nom: persona.nom,
                msg: msg
            })

            return true;
        }

        return false;
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