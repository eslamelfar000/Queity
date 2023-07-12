let menu = document.getElementById('slider');
let over = document.getElementById('overlay');
let _body = document.getElementById('body');

function openSlider() {
    menu.style.left = "0px";
    over.style.width = "100%";
    _body.style.overflowY = "hidden";
}

function closeSlider() {
    menu.style.left = "-300px";
    over.style.width = "0";
    _body.style.overflowY = "scroll";
}

// ....................................................................

let header = document.getElementById('header');
let row = document.getElementById('row');
let logo1 = document.getElementById('logo1');
let logo2 = document.getElementById('logo2');
let link = document.getElementById('all').getElementsByClassName('link');

window.onscroll = function() {
    if (window.scrollY >= header.offsetTop + 30) {
        header.classList.add('header-slide');
        row.classList.add('row-slide');
        logo1.classList.add('logo1-change');
        logo2.classList.add('logo2-change');

    } else {
        header.classList.remove('header-slide');
        row.classList.remove('row-slide');
        logo1.classList.remove('logo1-change');
        logo2.classList.remove('logo2-change');
    }
}




let img_change_1 = document.getElementById('img-slide-1');
let img_change_2 = document.getElementById('img-slide-2');
let img_change_3 = document.getElementById('img-slide-3');
let change_list = document.getElementById('change-list');
let name_1 = document.getElementById('name-1');
let name_2 = document.getElementById('name-2');
let name_3 = document.getElementById('name-3');

function Active_1() {
    img_change_1.classList.add('active');
    img_change_2.classList.remove('active');
    img_change_3.classList.remove('active');
    name_1.style.display = "block"
    name_2.style.display = "none"
    name_3.style.display = "none"
}

function Active_2() {
    img_change_1.classList.remove('active');
    img_change_2.classList.add('active');
    img_change_3.classList.remove('active');
    name_1.style.display = "none"
    name_2.style.display = "block"
    name_3.style.display = "none"

}

function Active_3() {
    img_change_1.classList.remove('active');
    img_change_2.classList.remove('active');
    img_change_3.classList.add('active');
    name_1.style.display = "none"
    name_2.style.display = "none"
    name_3.style.display = "block"
}