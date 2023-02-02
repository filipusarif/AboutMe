//Alert start
function aler() {
    alert("Fiverr Coming Soon!!");
}
//Alert end

// modal Start
const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.add("active");
    overlay.classList.add("active");
});
});

close_modals.forEach((btn) => {
btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
});
});

window.onclick = (event) => {
if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
}
};
// modal end

//Typing Text Start
var typed = new Typed(".auto-type", {
    strings: ["Sleeping", "Eating","Coder", "Student", "Programer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})
//Typing Text end

// detect device start
function dev(){
    var detector = new MobileDetect(window.navigator.userAgent)

            console.log( "Mobile: " + detector.mobile());
            console.log( "Phone: " + detector.phone());
            console.log( "Tablet: " + detector.tablet());
            console.log( "OS: " + detector.os());
            console.log( "userAgent: " + detector.userAgent());

            if(detector.mobile()!=null || detector.phone()!=null || detector.tablet()!=null){
                alert("Sorry, this website cannot be opened on a phone or tablet, please open it using a desktop..");
            }else {
                window.open('https://filipusarif.github.io/MyMouse/', '_blank');
            }
}
// detect device end

// scroll animation start
const boxes = document.querySelectorAll('.button');

window.addEventListener('scroll', check);

function check(){
    const triggerBottom = window.innerHeight /5 * 4;

    boxes.forEach((button) => {
        const boxTop = button.getBoundingClientRect().top;

        if(boxTop<=triggerBottom){
            button.classList.add('show');
        }else{
            button.classList.remove('show');
        }
    })
}
// scroll animation end

// parallax start
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.profile').css({
        'transform' : 'translate(0px,' + wScroll/5 +'%)',
        'width' :  200-wScroll/8.5+'px'
    })

    $('.text1').css({
        'transform' : 'translate(0px,' + wScroll/1.12 +'%)',
        // 'font-size' : 22-wScroll/50+'px'
    })

    $('.container-text').css({
        'transform' : 'translate(0px,' + wScroll/0.9 +'%)'
    })
});
// parallax end