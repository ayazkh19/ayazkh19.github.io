let form = document.querySelector('#form');
let modal_container = document.querySelector('#modal-container');
let modal = document.querySelector('#modal');
let body = document.querySelector('#body');
let circle = document.querySelectorAll('.circle');
let projects = document.querySelectorAll('.project');
let modalText = document.querySelector('#modal-text');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    body.style.overflow = 'hidden';
    modal_container.style.display = 'block';
});
modal_container.addEventListener('click', function () {
    body.style.overflow = 'visible';
    modal_container.style.display = 'none';
    modalText.innerHTML = 'this feature is currently under development please try again later.';
});


for (let i = 0; i < circle.length; i++) {
    let btn = circle[i];
    btn.addEventListener('click', function () {
        body.style.overflow = 'hidden';
        modal_container.style.display = 'block';
    });
}


projects.forEach(function (project) {
    project.addEventListener('click', function (event) {
        let link = project.dataset.link;
         event = event || window.event;
        let target = event.target || event.srcElement,
            text = target.textContent || target.innerText;
        if(text === 'Read More'){
            return false;
        }
        if (link === '#') {
            modalText.innerHTML = 'This site is currently under construction please visit later';
            body.style.overflow = 'hidden';
            modal_container.style.display = 'block';
        } else {
            location.href = link;
        }
    });
});
