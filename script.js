window.onscroll = function() {
    fixHeader();
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function fixHeader() {
    if (window.scrollY > sticky) {
        header.classList.add("fixed");
        header.style.top = "0px";
        banner.style.marginBottom = "10px";
    } else {
        header.classList.remove("fixed");
        header.style.top = "100px";
        banner.style.marginBottom = "-72px";
    }
}