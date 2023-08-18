export const Teste = (valordigitado) => {
    if (valordigitado === 'Guitarra') {
        console.log('tem cordas')

    }
    else if (valordigitado === 'Bateria') {
        console.log('tem pedal')
    }

    else if (valordigitado === 'Microfone') {
        console.log('tem fios')
    }

    else {
        console.log('não existe esse instrumento')
    }

}

export const Click = (valordigitado) => {
    switch (valordigitado) {
        case "Vitão": console.log('saco de vacilo'); break
        case "Eduardo": console.log('pinguço');break
        case "Marcelo": console.log('meu fregues');break
        default:
            console.log('errado não ta')
    }

}