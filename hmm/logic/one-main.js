window.onload = function() {GetPost()};

function GetPost()
{
    // Get post ID here....

    //RequestNewContent();
    
    AddNewContent("1\0" + "3 Jan 2021\0Work in Progress...\0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sem, feugiat a ultrices vitae, laoreet a eros. Maecenas rhoncus interdum vulputate. Praesent eu sapien erat. Ut quis semper dui. Nam in ipsum elementum, facilisis dolor eu, tristique orci. Suspendisse facilisis sollicitudin augue, ut laoreet nulla accumsan viverra. Aliquam efficitur leo velit, in commodo augue suscipit ut. In condimentum congue neque vitae fermentum. Nulla quam risus, blandit eget scelerisque sit amet, tristique id eros. Vivamus venenatis magna at vehicula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices eget elit at aliquam. Phasellus at vehicula lacus, et venenatis sapien. Suspendisse molestie ultrices cursus. Duis dignissim orci non tempus luctus.\0")
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

            document.getElementById('Content').append(newPost);
        }
    }
}
