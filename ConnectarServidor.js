class Xat{
    constructor(nom, link)
    {
        this.nom = nom;
        this.link = link;
        this.ultim = {
            nom:"",
            msg:""
        };
        this.i = setInterval(() => this.comprovarNouMissatge(), 1000);
        this.reiniciar();
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
        await fetch(this.link + "/enviar", this.crearDataPost({
            nom: this.nom,
            msg: msg
        }));
        console.clear();
        this.agafarTot();
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
        let res = await fetch(this.link + "/agafarNous", this.crearDataPost(this.ultim));
        let nouMissatges = await res.json();
        if(nouMissatges)
        {
            this.imprimir(nouMissatges);
        }
    }

    async agafarTot()
    {
        let res = await fetch(this.link + "/agafarTot");
        let arr = await res.json();
        if(arr)
        {
            this.imprimir(arr);
        }
    }
}