window.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector(".loginBtn");

  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const id = document.getElementById("login__email");
    const password = document.getElementById("login__password");
    if (id.value.length === 0 || password.value.length === 0) {
      return alert("아이디 또는 비밀번호를 입력해주세요");
    }

    window.location.href = "./home.html";
    id.value = "";
    password.value = "";
  });
});
