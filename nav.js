

function myfunc() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('show');
}

window.onscroll = function () {
    stickyNavbar();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function stickyNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky-navbar");
    }
    else {
        navbar.classList.remove("sticky-navbar");
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.tabss');
    const tabContents = document.querySelectorAll('.navtab-content');

    tabs.forEach(tab => {
        tab.addEventListener('mouseover', function () {
            const tabContentId = this.getAttribute('data-tab');
            activateTab(tabContentId);
        });
    });

    function activateTab(tabContentId) {
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabContentId).classList.add('active');
    }

    // Hide tab content when mouse leaves the tab area
    tabContents.forEach(tabContent => {
        tabContent.addEventListener('mouseleave', function () {
            this.classList.remove('active');
        });
    });

    tabs.forEach(tab => {
        tab.addEventListener('mouseover', function () {
            const tabContentId = this.getAttribute('data-tab');
            tabContents.forEach(content => {
                if (content.id !== tabContentId) {
                    content.classList.remove('active');
                }
            });
        });

    });

    
});


document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.canvas-tab');
    const tabContents = document.querySelectorAll('.canvas-tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');
            activateTab(tabId);
        });
    });

    function activateTab(tabId) {
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        document.getElementById(tabId).classList.add('active');
    }
});





