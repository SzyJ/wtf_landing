var loadProjects = true;
var scrollChangePadding = 40;

window.onscroll = function()
{
    if (loadProjects)
    {
        ProjBGFadeUpdate();
    }

    GetNextContent();
};

window.onload = function()
{
    // Text animation
    var titleDiv = document.getElementById("title_foreground");
    titleDiv.innerHTML = '|' + '&nbsp;'.repeat(txt.length - 1);
    const DELAY = 2500;
    setTimeout(typeTitle, DELAY);

    // Load Content
    ResetContent(loadProjects);
};

function ResetContent(setToProjects)
{
    document.getElementById("loaded_content").innerHTML = "";

    // Change provider URL
    loadProjects = setToProjects;
    if (setToProjects)
    {
        providerUrl = PROJ_URL;
        document.getElementById('loaded_content').classList.remove("hmm")
        document.getElementById('loaded_content').className = "project"
    }
    else
    {
        providerUrl = HMM_URL;
        document.getElementById('loaded_content').classList.remove("project")
        document.getElementById('loaded_content').className = "hmm"
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
    if (loadProjects)
    {
        AddNewProject(content);
    }
    else
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