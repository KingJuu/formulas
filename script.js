var inputs = document.querySelectorAll('.input-var');


document.querySelector('#btn-enviar').addEventListener('click', function(){
    for (input of inputs){

        if(input.id == 'x'){
            var x = parseFloat(input.value);
            console.log(x)
        }else if(input.id == 'y'){
            var y = parseFloat(input.value);
            console.log(y)
        }else if(input.id == 'r'){
            var r = parseFloat(input.value);
            console.log(r)
        }else if(input.id == 'L'){
            var L = parseFloat(input.value);
            console.log(L)
        }else if(input.id == 'h'){
            var h = parseFloat(input.value);
            console.log(h)
        }
    }

    //m and n
    var radM1 = (y-r)**2;
    var radN1 = (x-r)**2;
    var rad2 = h**2;

    var radicandoTM = radM1 + rad2;
    var radicandoTN = radN1 + rad2;

    var m = Math.sqrt(radicandoTM);
    var n = Math.sqrt(radicandoTN);


    const result = document.querySelector('.resultado');
    result.innerHTML = `<h1>Resultados</h1>
                        <p>m) ${m}</p>
                        <p>n) ${n}</p>`
}
)

