let body = document.querySelector('body')

let header = document.querySelector('header')

function str() {
    header.innerHTML = ''
    header.innerHTML = `
    <a href="../welcome/welcome.html" class="p_header">
        Главная
    </a>
    <a href="../wallets/wallets.html" class="p_header">
        Мои кошельки
    </a>
    <a href="../transactions/transactions.html" class="p_header">
        Мои транзакции
    </a>
    <p class="email_header">alexadams@google.com</p>
    <img src="./icon/log-out (1) 1.svg" class="img_header">
    `
}

str()