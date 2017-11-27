// Botões
var btnAutentificarLogin = document.getElementById('btnAutentificarLogin');
var btnAutentificarLoginFacebook = document.getElementById('btnAutentificarLoginFacebook');
var btnAutentificarLoginGoogle = document.getElementById('btnAutentificarLoginGoogle');

// Inputs
var edtEmailLogin = document.getElementById('edtEmailLogin');
var edtSenhaLogin = document.getElementById('edtSenhaLogin');

// Fazer login com email e senha.
btnAutentificarLogin.addEventListener('click', function(){
    firebase
        .auth()
        .signInWithEmailAndPassword(edtEmailLogin.value, edtSenhaLogin.value)
        .then(function (result){
            clearInputs();
            console.log(result);
            window.location.assign("dash.html");
        })
        .catch(function(error){
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao efetuar login, email ou senha incorreta.');
        });
});

// Autenticação com Facebook.
btnAutentificarLoginFacebook.addEventListener('click', function(){
    // Providers
    var provider = new firebase.auth.FacebookAuthProvider();
    signIn(provider);
});

// Autenticação com Google.
btnAutentificarLoginGoogle.addEventListener('click', function(){
    // Providers
    var provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
});

// Função genérica
function signIn(provider){
    firebase
        .auth()
        .signInWithPopup(provider)  //  signInWithRedirect = leva a autentificação para outra tela.
        .then(function(result){
            console.log(result);
            var token = result.credential.accessToken;
            window.location.assign("dash.html");
        })
        .catch(function(error){
            console.log(error);
            alert('Falha na autenticação');
        });
}

// limpa os campos
function clearInputs(){
    edtEmailLogin.value = "";
    edtSenhaLogin.value = "";
}