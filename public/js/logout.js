var linkLogoutDash = document.getElementById('linkLogoutDash');

// Função de logout.
linkLogoutDash.addEventListener('click', function(){
	firebase
	.auth()
	.signOut()
	.then(function(){
		window.location.assign("index.html");
	}, function(error){
		console.error(error);
	});
});