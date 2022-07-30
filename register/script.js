let form = document.forms.register
let body = document.querySelector('body')
let inp = document.querySelectorAll('input')
let went = document.querySelector('.go')

let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')

let pattern = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
}

function validate(field, regex){
    if (regex.test(field.value)) {
        field.classList.add('valid');
        field.classList.remove('invalid');
    } else {
        field.classList.add('invalid');
        field.classList.remove('valid');
    }
}

inp.forEach((input) =>{
    input.onkeyup = () => {
        validate(input, pattern[input.name])
    }
    if(input.value.length === 0){
        input.classList.add('invalid')
    }
})

went.onclick = () =>{
    if (one.classList.contains('invalid') || one.value.lenght === 0 || two.classList.contains('invalid') || two.value.lenght === 0 || three.classList.contains('invalid') || three.value.lenght === 0 || four.classList.contains('invalid') || four.value.lenght === 0) {
        alert('error')
    } else {
        val()
    }
}

function val(){
    form.onsubmit = (event) => {
        event.preventDefault();

        let userr = {};

        let fm = new FormData(form);

        fm.forEach((value, key) => {
            userr[key] = value;
        })

        console.log(userr)
        localStorage.setItem('user', JSON.stringify(userr))

        window.location.href = '../sign/index.html'
    }
}

function napravlenie() {
    let data = JSON.parse(localStorage.getItem('user'))
    console.log(data);

    if (data >= 0) {
        window.location.href = '../register/index.html'
    } else {
        window.location.href = '../sign/index.html'
    }
}
napravlenie()