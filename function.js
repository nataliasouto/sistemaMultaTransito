function calcular(){
    var txtv = window.document.getElementById('txtvel')
    var res = window.document.getElementById('res')
    var vel = Number(txtv.value)
         res.innerHTML = `<p>Sua velocidade atual é ${vel}.</p>`
        if (vel > 60) {
            res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade.</p>`
        } 
            res.innerHTML += `<p>Dirija com cuidado!</p>`           
        }
