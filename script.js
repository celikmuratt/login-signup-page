// HTML içindeki "container" ID'li elementi seçiyoruz.
const container = document.getElementById('container');

// "register" ID'li butonu seçiyoruz (Kayıt ol butonu).
const registerBtn = document.getElementById('register');

// "login" ID'li butonu seçiyoruz (Giriş yap butonu).
const loginBtn = document.getElementById('login');

// Kayıt ol butonuna tıklanınca "container" elementine "active" sınıfını ekliyoruz.
// Bu, CSS tarafında kayıt formunun görünmesini sağlar.
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

// Giriş yap butonuna tıklanınca "container" elementinden "active" sınıfını kaldırıyoruz.
// Bu, CSS tarafında giriş formunun görünmesini sağlar.
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});