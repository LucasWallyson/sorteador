class Sorteador {
    constructor(){
        this.NumeroSorteados = [];
     
        this.listEl = document.getElementById('ver');
        this.QuantityEl = parseInt(document.getElementById('Quantity').value);
        this.minEl = parseInt(document.getElementById('min').value);
        this.maxEl = parseInt(document.getElementById('max').value);
        this.getRandomInt(this.minEl,this.maxEl);
        
    }
    VerNS(){
        const NumeroTratado = this.NumeroSorteados.join('-');
        let Mostrar = NumeroTratado;
        document.getElementById("ver").textContent = Mostrar;
        // let element = document.createElement('p');
        // let textelement = document.createTextNode(Mostrar);
        // element.appendChild(textelement);
        // this.listEl.appendChild(element);
        // NumeroTratado.innerHTML = "";
    }
    getRandomInt(min, max) {
        if (this.QuantityEl < 0 ){  
            alert("Não é possivel, calcular com numeros negativos!");
            return;
        }
        if (this.QuantityEl == 0 && this.QuantityEl == 0){
            alert("É Preciso inserir um Valor!");
            return;
        }
        if(this.QuantityEl > this.maxEl) {
            alert("O número da quantidade é maior que o valor máximo");
            return;
        }
        if(this.minEl > 0 && this.maxEl < 9999 && this.minEl < this.maxEl ){
            for(var i = 1; i <= this.QuantityEl;i++){
                min = Math.floor(min);
                max = Math.floor(max);
                let guardar = Math.round(Math.random() * (max - min)) + min ;
                this.NumeroSorteados.push(guardar);
                console.log(this.NumeroSorteados);
                
                }
                this.VerNS();
                // if(this.QuantityEl > 0){
                //     alert(`numeros Sorteados são : ${this.NumeroSorteados}`);
                // }             
        }
    }
}

document.getElementById("sortear").addEventListener('click', function(event) {
    event.preventDefault();
   
    new Sorteador();
});



