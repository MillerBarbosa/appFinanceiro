function register() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user && pass) {
    localStorage.setItem(user, pass);
    alert("Cadastro realizado!");
  } else {
    alert("Preencha todos os campos.");
  }
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const storedPass = localStorage.getItem(user);
  if (storedPass === pass) {
    alert("Login bem-sucedido!");
    localStorage.setItem("loggedUser", user);
    document.getElementById("auth-section").style.display = "none";
    document.getElementById("finance-section").style.display = "block";
    loadData();
  } else {
    alert("Usuário ou senha incorretos.");
  }
}