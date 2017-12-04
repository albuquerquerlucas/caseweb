// Inputs
var edtNomeCurso = document.getElementById('edtNomeCurso');
var edtNomeProfessor = document.getElementById('edtNomeProfessor');
var edtDescricao = document.getElementById('edtDescricao');

// Botões
var btnSalvarCurso = document.getElementById('btnSalvarCurso');
var btnCancelarCurso = document.getElementById('btnCancelarCurso');

// Listas
var listaCursosDb = document.getElementById('listaCursosDb');


// Salvar turma no Database
btnSalvarCurso.addEventListener('click', function(){

	var uiId = uuidv4();

	createCurso(uiId, edtNomeCurso.value, edtNomeProfessor.value, edtDescricao.value);
	limparCamposCursos();
});

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


function createCurso(id, curso, professor, descricao){
	var data = {
		id : id,
		curso : curso,
		professor : professor,
		descricao : descricao
	};

	// Salva no realtime database
	firebase.database().ref().child('cursos').child(id).set(data);
}

// Resgatar dados do database
firebase.database().ref('cursos').on('value', function(snapshot){
	listaCursosDb.innerHTML = '';
	snapshot.forEach(function(item){
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(item.val().curso + ' : ' + item.val().professor + ' : ' + item.val().descricao));
		listaCursosDb.appendChild(li);
	});
});

// Evento do Botão Limpar.
btnCancelarCurso.addEventListener('click', function(){
	limparCamposCursos();	
});

// limpa os campos
function limparCamposCursos(){
    edtNomeCurso.value = "";
    edtNomeProfessor.value = "";
    edtDescricao.value = "";
}