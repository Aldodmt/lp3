window.addEventListener('load', () => {

    $('#nombre').bind('keyup blur', function(){
    var node = $(this);
    node.val(node.val().replace(/[^a-z && A-Z]/g,''));
});

$('#apellido').bind('keyup blur', function(){
    var node = $(this);
    node.val(node.val().replace(/[^a-z && A-Z]/g,''));
});

$('#ci').bind('keyup blur', function(){
    var node = $(this);
    node.val(node.val().replace(/[^0-9]/g,''));
});

document.getElementById('#email').addEventListener('input', function(event){
    campo = event.target;
    valido = document.getElementById('emailOK');

    emailred = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,64}\.){1,50}[A-Z]{2,10}$/i;
    if(emailred.test(campo.value)){
        valido.innerText = "Email valido";
    }else{
        valido.innerText = "Email incorrecto";
    }
});
});