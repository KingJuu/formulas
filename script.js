var inputs = document.querySelectorAll('.input-var');


document.querySelector('#btn-enviar').addEventListener('click', function(){
    for (input of inputs){

        if(input.id == 'x'){
            var x = parseFloat(input.value);

        }else if(input.id == 'y'){
            var y = parseFloat(input.value);
            
        }else if(input.id == 'r'){
            var r = parseFloat(input.value);
            
        }else if(input.id == 'L'){
            var L = parseFloat(input.value);
            
        }else if(input.id == 'h'){
            var h = parseFloat(input.value);
            
        }
    }


    //altura ao quadrado
    var heightS = h**2;

    //m 
    var radM1 = (y-r)**2;
    var radicandoTM = radM1 + heightS;
    var m = Math.sqrt(radicandoTM);

    //n
    var radN1 = (x-r)**2;
    var radicandoTN = radN1 + heightS;
    var n = Math.sqrt(radicandoTN);

    //A and B
    const sin = [0, 0.5, 0.866025404, 1];
    const cos = [1, 0.866025404, 0.5, 0];

    var testeB = [];
    var testeA = [];

    for(var i = 0; i<sin.length; i++){

        let calc1 = (L - sin[i]*r)**2;

        //A
        let calcA2 = (x - cos[i]*r)**2 + heightS;
        let calcA3 = calc1 + calcA2;
        var calcA4 = Math.sqrt(calcA3);
        testeA += `A${i+1}) ${calcA4}</p>`;

        //B
        let calcB2 = (y - cos[i]*r)**2 + heightS;
        let calcB3 = calc1 + calcB2;
        var calcB4 = Math.sqrt(calcB3);
        testeB += `B${i+1}) ${calcB4}</p>`;

        
    }
    
    //exibir resultado
    const result = document.querySelector('.exibir');
    result.innerHTML = `
    <h1>Resultados</h1>
    <h3>(Em mm)</h3>
    <div class='resultado'>
        <div class='result'>
        <p>m) ${m}</p>
        <p>n) ${n}</p>
        </div>
        <div class='result'>
        <p>${testeA}
        </div>
        <div class='result'>
        <p>${testeB}
        </div>
    </div>
        `
        ;
    
}
)

