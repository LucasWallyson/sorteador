class Sorteador {
    constructor(){
        this.NumeroSorteados = [];

        // this.formEl = document.getElementById('form');
        this.QuantityEl = document.getElementById('Quantity').value;
        this.minEl = document.getElementById('min').value;
        this.maxEl = document.getElementById('max').value;
        
        this.Sortear();
    }
    // getRandomIntInclusive(){
    //     (min, max) => {
    //         min = Math.ceil(min);
    //         max = Math.floor(max);
    //         return Math.floor(Math.random() * (max - min + 1)) + min;
    //       }  
    // }

    Sortear (){
        let Quantity1 = this.QuantityEl;
        let min = this.minEl;
        let max = this.maxEl;
        if(min > 0 && max < 9999 && min < max){
          for(var i = 1; i <= Quantity1;i++){
            let guardar = Math.floor(Math.random() * (max - min) + min);
              this.NumeroSorteados.push(guardar);
              console.log(this.NumeroSorteados);
          }
            }else {
                console.log("error");
                
            } 
    }
}

document.getElementById("sortear").addEventListener('click', function(event) {
    event.preventDefault();
    new Sorteador();
});


  
  