window.onscroll = function() {GetNextContent()};
window.onload = function() {GetNextContent()};

var scrollChangePadding = 40;

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

            document.getElementById('Content').insertBefore(newPost, document.getElementById('ContentBottom'));
        }
    }

    if (AllContentLoaded())
    {
        document.getElementById('ContentBottom').remove();
    }
}
