

function calcularJuros() {
    //CALCULO SEMPRE VAI UTILIZAR TEMPO EM ANOS

    //capturar as variaveis inseridas
    let valorInicio = parseFloat(document.getElementById('valor_inicial').value)
    let valorMensal = parseFloat(document.getElementById('valor_mensal').value)
    let taxaJuros = parseFloat(document.getElementById('taxa_juros').value)
    let periodo = parseInt(document.getElementById('periodo').value)

    //capturar as opcoes escolhidas nos dropdowns
    let mensalAnual = document.getElementById('mensal_anual').value
    let mesesAnos = document.getElementById('meses_anos').value

    //conversao de mensal para anual
    if (mensalAnual === 'anual') {
        taxaJuros /= 12
    }

    //conversao de  meses para anos
    if (mesesAnos === 'anos') {
        periodo *= 12
    }

    let valor_total_investido = valorInicio + (valorMensal * periodo)

    let investimento_acumulado = valorInicio

    let juros_compostos = 0
    let juros_compostos_acumulados = 0

    for (let i = 0; i < periodo; i++) {
        juros_compostos = (investimento_acumulado + taxaJuros) / 100
        juros_compostos_acumulados += juros_compostos
        investimento_acumulado += juros_compostos + valorMensal
    }

    let = valor_a_receber = valor_total_investido + juros_compostos_acumulados

    document.getElementById('total-final').innerHTML = (valor_a_receber).toFixed(2)
    document.getElementById('total-invest').innerHTML = valor_total_investido
    document.getElementById('total-juros').innerHTML = juros_compostos_acumulados.toFixed(2)

}

function limparTela() {
     document.getElementById('valor_inicial').value = ''
     document.getElementById('valor_mensal').value = ''
     document.getElementById('taxa_juros').value = ''
     document.getElementById('periodo').value = ''
}