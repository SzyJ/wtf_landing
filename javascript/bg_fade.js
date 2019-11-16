window.onscroll = function() {myFunction()};

var scrollChangePadding = 400;

function myFunction() {

    if (document.getElementById('project2_section').getBoundingClientRect().top < scrollChangePadding) {
        document.body.classList.remove('gnat_color');
        document.body.classList.add('midori_color');

    } else if (document.getElementById('project1_section').getBoundingClientRect().top < scrollChangePadding) {
        document.body.classList.remove('midori_color');
        document.body.classList.add('gnat_color');

    } else {
        document.body.classList.remove('gnat_color');
        document.body.classList.remove('midori_color');

    }

}