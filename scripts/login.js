function login() {
	sessionStorage.setItem('username', document.getElementById("username").value);
	window.location.href = 'index.html';
}