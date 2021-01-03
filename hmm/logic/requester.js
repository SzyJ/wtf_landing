var loadingContent = false;
var lastResponseId = -1;

const URL = "https://szy.wtf/sslapi/hmm-wtf/"

function InitialContentRequest()
{
    var responseStr;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            responseStr = xhttp.responseText;
            GetLastIdInContent(responseStr);
            AddNewContent(responseStr);
        }
        loadingContent = false;
    };
    xhttp.open("GET", URL + "request/init", true);
    xhttp.send();
}

function NextContentRequest(lastReceivedId)
{
    var responseStr;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            responseStr = xhttp.responseText;
            GetLastIdInContent(responseStr);
            AddNewContent(responseStr);
        }
        loadingContent = false;
    };
    xhttp.open("GET", URL + "request/next/" + lastReceivedId, true);
    xhttp.send();
}

function GetLastIdInContent(content)
{
    var splitArray = content.split("\0");
    for (var idIterator = 0; idIterator < splitArray.length; idIterator += 4)
    {
        var postId = splitArray[idIterator];

        if (postId.length > 0 && !isNaN(postId))
        {
            lastResponseId = parseInt(postId);
        }
    }
}

function RequestNewContent()
{
    // No more content
    if (loadingContent || lastResponseId == 0) return;

    //var content;
    loadingContent = true;
    if (lastResponseId == -1) // Initial content request
    {
        InitialContentRequest();
    }
    else // Next content request
    {
        NextContentRequest(lastResponseId);
    }
}

function AllContentLoaded()
{
    return lastResponseId == 0;
}