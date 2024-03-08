    function gerar(){
        var numMaximo = document.getElementById('numero').value

        if (numMaximo > 1000000000){
            alert('Número máximo excedido! Escolha outro número máximo')
        }else{
            var numAleatorio = Math.round(Math.random() * numMaximo)
            res.innerHTML = numAleatorio

        }
    }