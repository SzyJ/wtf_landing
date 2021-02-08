var bgFadePadding = 300;

function ProjBGFadeUpdate() {
    var header = document.getElementById('header');
    var project6 = document.getElementById('project6_section');
    var project5 = document.getElementById('project5_section');
    var project4 = document.getElementById('project4_section');
    var project3 = document.getElementById('project3_section');
    var project2 = document.getElementById('project2_section');
    var project1 = document.getElementById('project1_section');

    if (project1 &&
        project1.getBoundingClientRect().top < bgFadePadding)
    {
        document.body.className = 'other_proj_color';

        if (header) header.style.opacity = "0";
        if (project6) project6.style.opacity = "0";
        if (project5) project5.style.opacity = "0";
        if (project4) project4.style.opacity = "0";
        if (project3) project3.style.opacity = "0";
        if (project2) project2.style.opacity = "0";
        if (project1) project1.style.opacity = "1";
    }
    else if (project2 &&
             project2.getBoundingClientRect().top < bgFadePadding)
    {
        document.body.className = 'wintui_color';

        if (header) header.style.opacity = "0";
        if (project6) project6.style.opacity = "0";
        if (project5) project5.style.opacity = "0";
        if (project4) project4.style.opacity = "0";
        if (project3) project3.style.opacity = "0";
        if (project2) project2.style.opacity = "1";
        if (project1) project1.style.opacity = "0";
    }
    else if (project3 &&
             project3.getBoundingClientRect().top < bgFadePadding)
    {
        document.body.className = 'flip_color';

        if (header) header.style.opacity = "0";
        if (project6) project6.style.opacity = "0";
        if (project5) project5.style.opacity = "0";
        if (project4) project4.style.opacity = "0";
        if (project3) project3.style.opacity = "1";
        if (project2) project2.style.opacity = "0";
        if (project1) project1.style.opacity = "0";
    }
    else if (project4 &&
             project4.getBoundingClientRect().top < bgFadePadding)
    {
        document.body.className = 'midori_color';

        if (header) header.style.opacity = "0";
        if (project6) project6.style.opacity = "0";
        if (project5) project5.style.opacity = "0";
        if (project4) project4.style.opacity = "1";
        if (project3) project3.style.opacity = "0";
        if (project2) project2.style.opacity = "0";
        if (project1) project1.style.opacity = "0";
    }
    else if (project5 &&
             project5.getBoundingClientRect().top < bgFadePadding)
    {
        document.body.className = 'gnat_color';

        if (header) header.style.opacity = "0";
        if (project6) project6.style.opacity = "0";
        if (project5) project5.style.opacity = "1";
        if (project4) project4.style.opacity = "0";
        if (project3) project3.style.opacity = "0";
        if (project2) project2.style.opacity = "0";
        if (project1) project1.style.opacity = "0";
    }
    else if (project6 &&
             project6.getBoundingClientRect().top < bgFadePadding)
    {
        document.body.className = 'hmm_color';

        if (header) header.style.opacity = "0";
        if (project6) project6.style.opacity = "1";
        if (project5) project5.style.opacity = "0";
        if (project4) project4.style.opacity = "0";
        if (project3) project3.style.opacity = "0";
        if (project2) project2.style.opacity = "0";
        if (project1) project1.style.opacity = "0";
    }
    else
    {
        document.body.className = '';

        if (header) header.style.opacity = "1";
        if (project6) project6.style.opacity = "0";
        if (project5) project5.style.opacity = "0";
        if (project4) project4.style.opacity = "0";
        if (project3) project3.style.opacity = "0";
        if (project2) project2.style.opacity = "0";
        if (project1) project1.style.opacity = "0";
    }
}