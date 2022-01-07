
let form = document.querySelector('.form'),
formInputs = document.querySelectorAll('.form-input');

form.onsubmit = function () {
    let emptyInputs = Array.from(formInputs).filter(input => input.value === '');
    
    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    if (emptyInputs.length !== 0) {
        return false;
    }
}
