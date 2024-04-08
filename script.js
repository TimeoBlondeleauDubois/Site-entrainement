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

document.getElementById('openSidebar').addEventListener('click', function(event) {
    event.stopPropagation();
    document.querySelector('.sidebar-container').style.right = '0';
});

document.addEventListener('click', function(event) {
    var sidebarContainer = document.querySelector('.sidebar-container');
    if (event.target !== sidebarContainer && !sidebarContainer.contains(event.target)) {
        sidebarContainer.style.right = '-450px';
    }
});