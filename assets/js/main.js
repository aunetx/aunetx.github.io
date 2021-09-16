"use strict";

function check_current_page_id() {
    let current_page = document.getElementById("current-page");
    let link_list = document.getElementsByTagName('nav')[0].getElementsByTagName('li');
    for (let link of link_list) {
        let a = link.getElementsByTagName('a')[0]
        if (a != current_page) {
            a.onmouseover = () => {
                current_page.className = "hide-current-page";
            };
            a.onmouseleave = () => {
                current_page.className = "";
            };
        }
    }
}

function check_full_height_taken() {
    let footer = document.getElementsByTagName("footer")[0];
    let check_height = () => {
        if (document.body.offsetHeight >= window.innerHeight) {
            footer.className = "n_f full-height-taken"
        } else {
            footer.className = "n_f"
        }
    }
    window.onresize = check_height;
    check_height();
}

window.onload = function () {
    check_current_page_id();
    check_full_height_taken();
}