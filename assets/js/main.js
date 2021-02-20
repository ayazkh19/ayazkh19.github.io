let form = document.querySelector('#form');
let modal_container = document.querySelector('#modal-container');
let modal = document.querySelector('#modal');
let body = document.querySelector('#body');
let circle = document.querySelectorAll('.circle');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    body.style.overflow = 'hidden';
    modal_container.style.display = 'block';
});
modal_container.addEventListener('click', function () {
    body.style.overflow = 'visible';
    modal_container.style.display = 'none';
});


for (let i = 0; i < circle.length; i++) {
    let btn = circle[i];
    btn.addEventListener('click', function () {
        body.style.overflow = 'hidden';
        modal_container.style.display = 'block';
    });
}
