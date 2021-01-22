var bgFadePadding = 300;

function ProjBGFadeUpdate() {
    if (document.getElementById('project1_section').getBoundingClientRect().top < bgFadePadding)
    {
        document.body.className = 'other_proj_color';

        document.getElementById('header').style.opacity = "0";
        document.getElementById('project6_section').style.opacity = "0";
        document.getElementById('project5_section').style.opacity = "0";
        document.getElementById('project4_section').style.opacity = "0";
        document.getElementById('project3_section').style.opacity = "0";
        document.getElementById('project2_section').style.opacity = "0";
        document.getElementById('project1_section').style.opacity = "1";
    }
    else if (document.getElementById('project2_section').getBoundingClientRect().top < bgFadePadding)
    {
        document.body.className = 'wintui_color';

        document.getElementById('header').style.opacity = "0";
        document.getElementById('project6_section').style.opacity = "0";
        document.getElementById('project5_section').style.opacity = "0";
        document.getElementById('project4_section').style.opacity = "0";
        document.getElementById('project3_section').style.opacity = "0";
        document.getElementById('project2_section').style.opacity = "1";
        document.getElementById('project1_section').style.opacity = "0";
    }
    else if (document.getElementById('project3_section').getBoundingClientRect().top < bgFadePadding)
    {
        document.body.className = 'flip_color';

        document.getElementById('header').style.opacity = "0";
        document.getElementById('project6_section').style.opacity = "0";
        document.getElementById('project5_section').style.opacity = "0";
        document.getElementById('project4_section').style.opacity = "0";
        document.getElementById('project3_section').style.opacity = "1";
        document.getElementById('project2_section').style.opacity = "0";
        document.getElementById('project1_section').style.opacity = "0";
    }
    else if (document.getElementById('project4_section').getBoundingClientRect().top < bgFadePadding)
    {
        document.body.className = 'midori_color';

        document.getElementById('header').style.opacity = "0";
        document.getElementById('project6_section').style.opacity = "0";
        document.getElementById('project5_section').style.opacity = "0";
        document.getElementById('project4_section').style.opacity = "1";
        document.getElementById('project3_section').style.opacity = "0";
        document.getElementById('project2_section').style.opacity = "0";
        document.getElementById('project1_section').style.opacity = "0";
    }
    else if (document.getElementById('project5_section').getBoundingClientRect().top < bgFadePadding)
    {
        document.body.className = 'gnat_color';

        document.getElementById('header').style.opacity = "0";
        document.getElementById('project6_section').style.opacity = "0";
        document.getElementById('project5_section').style.opacity = "1";
        document.getElementById('project4_section').style.opacity = "0";
        document.getElementById('project3_section').style.opacity = "0";
        document.getElementById('project2_section').style.opacity = "0";
        document.getElementById('project1_section').style.opacity = "0";
    }
    else if (document.getElementById('project6_section').getBoundingClientRect().top < bgFadePadding)
    {
        document.body.className = 'hmm_color';

        document.getElementById('header').style.opacity = "0";
        document.getElementById('project6_section').style.opacity = "1";
        document.getElementById('project5_section').style.opacity = "0";
        document.getElementById('project4_section').style.opacity = "0";
        document.getElementById('project3_section').style.opacity = "0";
        document.getElementById('project2_section').style.opacity = "0";
        document.getElementById('project1_section').style.opacity = "0";
    }
    else
    {
        document.body.className = '';

        document.getElementById('header').style.opacity = "1";
        document.getElementById('project6_section').style.opacity = "0";
        document.getElementById('project5_section').style.opacity = "0";
        document.getElementById('project4_section').style.opacity = "0";
        document.getElementById('project3_section').style.opacity = "0";
        document.getElementById('project2_section').style.opacity = "0";
        document.getElementById('project1_section').style.opacity = "0";
    }
}