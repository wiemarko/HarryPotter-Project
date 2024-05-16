window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    const menuToggle = document.body.querySelector('.menu-toggle');
    // menuToggle.addEventListener('click', event => {
    //     event.preventDefault();
    //     sidebarWrapper.classList.toggle('active');
    //     _toggleMenuIcon();
    //     menuToggle.classList.toggle('active');
    // })

    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};



let play = document.getElementById("play");
let audio = new Audio("/assets/Hedwigs Theme.mp3");
let isPlaying = false;

function playMusic() {
    if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
}
if (play != null) {
    play.addEventListener("click", playMusic);
}
play.addEventListener("click", playMusic);



let play2 = document.getElementById("play-magic");
let audio2 = new Audio("/assets/Lumos Maxima.mp3");
let isPlaying2 = false;

function playMusic2() {
    if (isPlaying2) {
        audio2.pause();
        audio2.currentTime = 0;
        isPlaying2 = false;
    } else {
        audio2.play();
        isPlaying2 = true;
    }
}
play2.addEventListener("click", playMusic2);



