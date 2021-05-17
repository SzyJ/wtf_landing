var scrollChangePadding = 40;

window.onscroll = function()
{
    ProjBGFadeUpdate();
    GetNextContent();
};

window.onload = function()
{
    // Text animation
    //var titleDiv = document.getElementById("title_foreground");
    //titleDiv.innerHTML = '&nbsp;'.repeat(txt.length - 1);
    //const DELAY = 2500;
    //setTimeout(typeTitle, DELAY);

    // Load Content
    ResetContent();
};

function ResetContent(setToContent)
{
    document.getElementById("loaded_content").innerHTML = "";
    document.getElementById('scroll_arrow').style.display = "none";

    // Change provider URL
    //document.getElementById('quick_links').style.display = "none";

    //if (setToContent == 0)
    //{
    //    providerUrl = PROJ_URL;
    //    document.getElementById('loaded_content').classList.remove("hmm")
    //    document.getElementById('loaded_content').classList.remove("main")
    //    document.getElementById('loaded_content').className = "project"
//
    //    document.getElementById('proj_button').classList.add('selected');
    //    document.getElementById('home_button').classList.remove('selected');
    //    document.getElementById('hmm_button').classList.remove('selected');
//
    //    document.getElementById('home_button').innerHTML = '<i class="fa fa-home"></i>';
    //}
    //else if (setToContent == 1)
    //{
    //    document.getElementById('loaded_content').classList.remove("project")
    //    document.getElementById('loaded_content').classList.remove("hmm")
    //    document.getElementById('loaded_content').className = "main"
//
    //    document.getElementById('proj_button').classList.remove('selected');
    //    document.getElementById('home_button').classList.add('selected');
    //    document.getElementById('hmm_button').classList.remove('selected');
//
    //    document.getElementById('quick_links').style.display = "block";
    //    document.getElementById('home_button').innerHTML = 'welcome';
    //    return;
    //}
    //else if (setToContent == 2)
    //{
    //    providerUrl = HMM_URL;
    //    document.getElementById('loaded_content').classList.remove("project")
    //    document.getElementById('loaded_content').classList.remove("main")
    //    document.getElementById('loaded_content').className = "hmm"
//
    //    document.getElementById('proj_button').classList.remove('selected');
    //    document.getElementById('home_button').classList.remove('selected');
    //    document.getElementById('hmm_button').classList.add('selected');
//
    //    document.getElementById('home_button').innerHTML = '<i class="fa fa-home"></i>';
    //}
    loadingContent = false;
    lastResponseId = -1;

    var loader = document.createElement("div");
    loader.className = "loader";
    loader.id = "ContentBottom";
    document.getElementById("loaded_content").append(loader);

    GetNextContent();
}

function GetNextContent()
{
    if (loadingContent || AllContentLoaded()) return;

    var viewportHeight = window.innerHeight;

    if (document.getElementById('ContentBottom').getBoundingClientRect().top < viewportHeight + scrollChangePadding)
    {
        RequestNewContent();
    }
}

function AddNewContent(content)
{
    console.log("Received content:");
    console.log(content);
    document.getElementById('scroll_arrow').style.display = "block";

    AddNewProject(content);

    if (AllContentLoaded())
    {
        document.getElementById('ContentBottom').remove();
    }

    loadingContent = false;
}

function AddNewProject(content)
{
    var splitContent = content.split("\0");
    for (var idIterator = 0; idIterator < splitContent.length; idIterator += 4)
    {
        var postId = splitContent[idIterator];
        if (postId.length > 0 && !isNaN(postId) && postId != "0000")
        {
            var newProj = document.createElement("div");
            newProj.innerHTML = splitContent[idIterator + 3];

            document.getElementById('loaded_content').insertBefore(newProj, document.getElementById('ContentBottom'));
        }
    }
}