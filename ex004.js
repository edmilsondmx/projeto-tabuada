function gerar() {
    var num = window.document.getElementById('txtnum')
    var numero = Number(num.value)
    var tab = window.document.getElementById('seltab')
    if (num.value.length == 0) {
        tab.innerHTML = ''
        window.alert('Insira um número válido!')
    } else {
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            tot = (c * numero)
            var item = document.createElement('option')
            item.text = `${numero} x ${c} = ${tot}`
            item.value = `tab${c}`
            tab.appendChild(item)
            
        }
    }
}