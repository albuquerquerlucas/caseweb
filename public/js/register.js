// Botões
var btnRegistrarCadastro = document.getElementById('btnRegistrarCadastro');

// Inputs
var edtEmailCadastro = document.getElementById('edtEmailCadastro');
var edtSenhaCadastro = document.getElementById('edtSenhaCadastro');

// Cadastrar Novo Usuário
btnRegistrarCadastro.addEventListener('click', function(){
    firebase
        .auth()
        .createUserWithEmailAndPassword(edtEmailCadastro.value, edtSenhaCadastro.value)
        .then(function(){
            clearInputs();
            alert('Usuário cadastrado com sucesso!');
        })
        .catch(function(error){
            console.error(error.code)
            console.error(error.message);
            alert('Fala ao cadastrar, tente novamente.');
        });
});

// limpa os campos
function clearInputs(){
    edtEmailCadastro.value = "";
    edtSenhaCadastro.value = "";
}