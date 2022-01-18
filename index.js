const switchBtn = document.querySelector('#switch');
const basic = document.querySelector('.basic .price');
const pro = document.querySelector('.pro .price');
const master = document.querySelector('.master .price');

const toggleTransition = () => {
    pro.removeEventListener("transitionend", onTransitionEnd);
    pro.addEventListener("transitionend", onTransitionEnd);

    basic.classList.remove("fade");
    pro.classList.remove("fade");
    master.classList.remove("fade");
}

const onTransitionEnd = () => {
    pro.removeEventListener("transitionend", onTransitionEnd);

    if(switchBtn.checked) {
        basic.innerHTML = "$2.99";
        pro.innerHTML = "$3.99";
        master.innerHTML = "$4.99";
    } else {
        basic.innerHTML = "$19.99";
        pro.innerHTML = "$24.99";
        master.innerHTML = "$39.99";
    }

    basic.classList.add("fade");
    pro.classList.add("fade");
    master.classList.add("fade");
}

switchBtn.addEventListener('click', toggleTransition);