var scrollChangePadding = 40;

const COLOR_TRANSITION_CSS = `
    div.letter div.letter_draw2,
    div.letter div.letter_draw1 {
        background-color: white;
        border-radius: 15px;
        animation: blackToWhiteBG 2s;
    }
    .arrow > i {
        color: white;
        animation: blackToWhite 2s;
    }
`

window.onscroll = function()
{
    GetNextContent();
    //UpdateHeaderAnimation();
};

window.onload = function()
{
    // Preload images
    //let img = document.createElement('img');
    //// Animate image in
    //img.onload = function () {
    //    console.log("Pre-loaded image");
    //    document.getElementById("background").style.animation = "showBackground 2s cubic-bezier(.77,0,.18,1)";
    //    document.getElementById("background").style.height = "100vh";
    //    document.body.style.background = "white";
//
    //    var styleSheet = document.createElement("style");
    //    styleSheet.type = "text/css";
    //    styleSheet.innerText = COLOR_TRANSITION_CSS;
    //    document.head.appendChild(styleSheet);
    //};
    //// Simple backgorund with no res dependencies
    //img.onerror = function () {
    //    document.getElementById("background").style.height = "100vh";
    //    document.getElementById("background_image").style.display = "none";
    //};
    //img.src = 'https://szy.wtf/projects/example_site2/res/bg.jpg';

    // Load Content
    ResetContent();
};

function UpdateHeaderAnimation()
{
    var scrollDepth = this.scrollY;
    var vh = window.innerHeight;// - 230;
    if (vh == 0) return;
    if (scrollDepth > vh + 300) return;

    var transitionProgress = scrollDepth / vh;
    if (transitionProgress > 0.99) transitionProgress = 1.0;

    var head = document.getElementById("header");
    var bg = document.getElementById("background");

    bg.style.opacity = "" + ((1.0 - transitionProgress) * 2);
    head.style.zoom = "" + (90 + ((1 - transitionProgress) * 10)) + "%";
    head.style.top = "" + (50 - (transitionProgress * 20)) + "%";
}

function ResetContent()
{
    loadingContent = false;
    lastResponseId = -1;

    //var loader = document.createElement("div");
    //loader.className = "loader";
    //loader.id = "ContentBottom";
    //document.getElementById("loaded_content").append(loader);

    GetNextContent();
}

function GetNextContent()
{
    if (!(document.getElementById('ContentBottom')) ||loadingContent || AllContentLoaded()) return;

    var viewportHeight = window.innerHeight;

    if (document.getElementById('ContentBottom').getBoundingClientRect().top < viewportHeight + scrollChangePadding)
    {
        RequestNewContent();
    }
}

function AddNewContent(content)
{
    //console.log("Received content:");
    //console.log(content);

    AddNewPost(content);

    if (AllContentLoaded())
    {
        document.getElementById('ContentBottom').remove();
    }

    loadingContent = false;
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
