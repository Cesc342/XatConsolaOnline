class Xat{
    constructor(contrasenya, link)
    {
        this.link = link;
        this.ultim = {
            nom:"",
            msg:""
        };
        this.contrasenya = undefined;

        this.comprovarContra(contrasenya)
        .then(res => {
            if(res){
                this.contrasenya = contrasenya;
                this.i = setInterval(() => this.comprovarNouMissatge(), 500);
                this.reiniciar();
            }
        })
    }

    crearDataPost(body)
    {
        let data = {
            method:"POST",
            headers:{ "Content-Type":"application/json" },
            body: JSON.stringify(body)
        }

        return data;
    }

    imprimir(arr)
    {
        for(let i = 0; i < arr.length; i++)
        {
            let obj = arr[i];
            console.log(`${obj.nom}: ${obj.msg}`);
            console.log();
        }

        let nUltim = arr.length - 1;
        this.ultim = arr[nUltim];
    }

    async enviar(msg)
    {
        if(this.contrasenya){
            this.reiniciar();
            await fetch(this.link + "/enviar", this.crearDataPost({
                nom: this.contrasenya,
                msg: msg
            }));
            this.comprovarNouMissatge();
            console.clear();
        }
    }

    async reiniciar()
    {
        console.clear();
        this.ultim = {
            nom:"",
            msg:""
        }
    }

    async comprovarNouMissatge()
    {
        let ultimPassat = this.ultim.nom + this.ultim.msg;
        let res = await fetch(this.link + "/agafarNous", this.crearDataPost(this.ultim));
        let nouMissatges = await res.json();
        if(nouMissatges)
        {
            if(ultimPassat == this.ultim.nom + this.ultim.msg)
            {
                this.imprimir(nouMissatges);
            }else{
                this.comprovarNouMissatge();
            }
        }
    }

    async agafarTot()
    {
        let res = await fetch(this.link + "/agafarTot");
        let arrGirada = await res.json();
        if(arrGirada)
        {
            let arr = [];
            for(let i = 0; i < arrGirada.length; i++){
                arr.unshift(arrGirada[i]);
            }
            this.imprimir(arr);
        }
    }

    async comprovarContra(contra)
    {
        let res = await fetch(this.link + "/comprovarContra", this.crearDataPost({
            contra: contra
        }));

        if(res.status == 200){
            return true;
        }else{
            console.error("La contrasenya no és correcta");
            return false;
        }
    }
}