
//
    //validando o formulario (danki-code)
//

//pegando os objetos do html
const input_nome = document.querySelector('.nome');
const input_email = document.querySelector('.email');
const textarea = document.querySelector('#textarea');
const submit = document.querySelector('.submit');
const erro = document.querySelector('.erro');
const form = document.querySelector('form');
const preencher_novamente = document.querySelector('.preencher_novamente');

//validando para preenchimento obrigatório
submit.addEventListener('click', function(){
    if(input_nome.value == ''){
        erro.innerHTML = '* O preenchimento do NOME é obrigatório!';
        erro.style.color = 'red';
    }
    
    else if(input_email.value == ''){
        erro.innerHTML = '* O preenchimento do EMAIL é obrigatório!';
        erro.style.color = 'red';
    }

    else if(textarea.value == ''){
        erro.innerHTML = '* O preenchimento da MENSAGEM é obrigatório!';
        erro.style.color = 'red';
    }

    else{
        erro.innerHTML = 'Formulário enviado com sucesso. Entraremos em cotato!';
        erro.style.color = 'green';
        form.style.display = 'none';
        preencher_novamente.style.display = 'block';
        preencher_novamente.addEventListener('click', function(){
            location.reload(true);
        })
    }
})
