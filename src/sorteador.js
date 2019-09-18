
class Sorteador {
    constructor(){

        this.NumeroSorteados = [];
        
        this.isloading = false; 
        this.QuantityEl = parseInt(document.getElementById('Quantity').value);
        this.minEl = parseInt(document.getElementById('min').value);
        this.maxEl = parseInt(document.getElementById('max').value);
        this.showLoading();
    }
    setloading(){
        return this.isloading = !this.isloading;
    }
    // hiddenloading(){
    //     img.style.visibility = hidden;
    // }
    showLoading(){
        this.setloading();
        if(this.isloading == true){ 
            let pegarimg = document.getElementById('Image');
            pegarimg.style.width = "60px";
            pegarimg.style.height = "60px";
            pegarimg.style.visibility = "visible";
            pegarimg.style.transform = "translate(530%, -15%)";
            pegarimg.src = "https://www.upgestao.com.br/wp-content/themes/softa/images/loading.gif?x97643";            

            setTimeout(() => {
                pegarimg.style.visibility = "hidden";
                this.getRandomInt(this.minEl, this.maxEl);
            }, 3000);

        }
    }
    VerNS(){
        const NumeroTratado = this.NumeroSorteados.join('-');
        let Mostrar = NumeroTratado;
        document.getElementById("ver").textContent = Mostrar;
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
        if(this.minEl > 0 && this.minEl < this.maxEl ){
            for(var i = 1; i <= this.QuantityEl;i++){
                min = Math.floor(min);
                max = Math.floor(max);
                let guardar = Math.round(Math.random() * (max - min)) + min ;
                this.NumeroSorteados.push(guardar);
                console.log(this.NumeroSorteados);
                
                }
                this.VerNS();            
        }
    }
}

document.getElementById("sortear").addEventListener('click', function(event) {
    event.preventDefault();
   
    new Sorteador();
});



