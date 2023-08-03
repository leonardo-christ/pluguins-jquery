$(document).ready(function(){
    $('#cep').mask('00000-000',{
        placeholder:'99999-999'
    })
    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(99) 99999-9999'
    })
    $('#cpf').mask('000.000.000-00',{
        placeholder:'999.999.999-99'
    })
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
        },
    })
})