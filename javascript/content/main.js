var currentContent = 1;
var scrollChangePadding = 40;
var initialised = false;

window.onscroll = function()
{
    if (currentContent == 0)
    {
        ProjBGFadeUpdate();
    }

    GetNextContent();
};

window.onload = function()
{
    // Text animation
    var titleDiv = document.getElementById("title_foreground");
    titleDiv.innerHTML = '&nbsp;'.repeat(txt.length - 1);
    const DELAY = 2500;
    setTimeout(typeTitle, DELAY);

    // Load Content
    ResetContent(loadProjects);
};

function ResetContent(setToContent)
{
    if (initialised && currentContent == setToContent) return;
    initialised = true;

    document.getElementById("loaded_content").innerHTML = "";
    document.getElementById('scroll_arrow').style.display = "none";

    // Change provider URL
    currentContent = setToContent;
    document.getElementById('quick_links').style.display = "none";

    if (setToContent == 0)
    {
        providerUrl = PROJ_URL;
        document.getElementById('loaded_content').classList.remove("hmm")
        document.getElementById('loaded_content').classList.remove("main")
        document.getElementById('loaded_content').className = "project"

        document.getElementById('proj_button').classList.add('selected');
        document.getElementById('home_button').classList.remove('selected');
        document.getElementById('hmm_button').classList.remove('selected');

        document.getElementById('home_button').innerHTML = '<i class="fa fa-home"></i>';
    }
    else if (setToContent == 1)
    {
        document.getElementById('loaded_content').classList.remove("project")
        document.getElementById('loaded_content').classList.remove("hmm")
        document.getElementById('loaded_content').className = "main"

        document.getElementById('proj_button').classList.remove('selected');
        document.getElementById('home_button').classList.add('selected');
        document.getElementById('hmm_button').classList.remove('selected');

        document.getElementById('quick_links').style.display = "block";
        document.getElementById('home_button').innerHTML = 'welcome';
        return;
    }
    else if (setToContent == 2)
    {
        providerUrl = HMM_URL;
        document.getElementById('loaded_content').classList.remove("project")
        document.getElementById('loaded_content').classList.remove("main")
        document.getElementById('loaded_content').className = "hmm"

        document.getElementById('proj_button').classList.remove('selected');
        document.getElementById('home_button').classList.remove('selected');
        document.getElementById('hmm_button').classList.add('selected');

        document.getElementById('home_button').innerHTML = '<i class="fa fa-home"></i>';
    }
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
    document.getElementById('scroll_arrow').style.display = "block";
    if (currentContent == 0)
    {
        AddNewProject(content);
    }
    else if (currentContent == 2)
    {
        AddNewPost(content);
    }

    if (AllContentLoaded())
    {
        document.getElementById('ContentBottom').remove();
    }
}

function AddNewPost(content)
{
    var splitContent = content.split("\0");
    for (var idIterator = 0; idIterator < splitContent.length; idIterator += 4)
    {
        var postId = splitContent[idIterator];
        if (postId.length > 0 && !isNaN(postId) && postId != "0000")
        {
            var postTitle = document.createElement("h3");
            postTitle.innerHTML = splitContent[idIterator + 2];

            var postDate = document.createElement("p");
            postDate.innerHTML = splitContent[idIterator + 1]
            postDate.className = "date";

            var postText = document.createElement("p");
            postText.innerHTML = splitContent[idIterator + 3];

            var newPost = document.createElement("div");
            newPost.className = "post";

            newPost.appendChild(postTitle);
            newPost.appendChild(postDate);
            newPost.appendChild(postText);

            document.getElementById('loaded_content').insertBefore(newPost, document.getElementById('ContentBottom'));
        }
    }
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