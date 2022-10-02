function searchPostalCode(){
    
    var postalCode = document.querySelector('#postal_code').value;
    var result = document.querySelector('#result');
    
    
    if(postalCode != "" && postalCode.length == "8"){
        var url = `https://viacep.com.br/ws/${postalCode}/json`;
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if(data.erro == "true"){
                result.innerHTML = "Não foi encontrado informações de endereço para o CEP informado! Verifique-o e tente novamente."
            }
            else{
                var street = data.logradouro;
                var city = data.localidade;
                var state = data.uf;
                var complement = '';
                result.innerHTML =  'CEP: '             + postalCode +   ' - ' +
                                    'Logradouro: '      + street     +   ' - ' +
                                    'Cidade: '          + city       +   ' - ' +
                                    'Estado: '          + state;
                console.log(data);
            }

        });
    }
    else{
        alert("Por favor informe um cep com 8 dígitos!");
    }
}

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}